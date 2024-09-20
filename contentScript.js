// contentScript.js

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startDeleting') {
    const ids = message.ids;
    startDeleting(ids);
    sendResponse({ status: 'Deletion started.' });
  }
});

// Deletion function
function startDeleting(ids) {
  let index = 0;
  const delay = 1000; // 1 second delay between requests

  function sendNextRequest() {
    if (index < ids.length) {
      let id = ids[index];
      let apiUrl = `${window.location.origin}/api/delete/${id}`; // Adjust the endpoint as needed

      // Send DELETE request using jQuery with custom header
      $.ajax({
        url: apiUrl,
        type: 'DELETE',
        headers: {
          'x-xsrf-header': 'X' // Custom header added as per your requirement
        },
        success: () => {
          console.log(`Deleted ID: ${id}`);
        },
        error: () => {
          console.error(`Failed to delete ID: ${id}`);
        },
        complete: () => {
          index++;
          const remaining = ids.length - index;
          // Send progress update
          chrome.runtime.sendMessage({ action: 'updateProgress', remaining: remaining });
          setTimeout(sendNextRequest, delay); // Buffer the next request
        }
      });
    } else {
      console.log('All IDs have been processed.');
      // Send a message indicating completion
      chrome.runtime.sendMessage({ action: 'deletionCompleted' });
    }
  }

  sendNextRequest();
}
