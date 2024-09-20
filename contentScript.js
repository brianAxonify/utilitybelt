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
      let apiUrl = `${window.location.origin}/axonify/admin/articles/${id}`; // Adjust the endpoint as needed

      // Send DELETE request using jQuery
      $.ajax({
        url: apiUrl,
        type: 'DELETE',
        success: () => {
          console.log(`Deleted ID: ${id}`);
        },
        error: () => {
          console.error(`Failed to delete ID: ${id}`);
        },
        complete: () => {
          index++;
          setTimeout(sendNextRequest, delay); // Buffer the next request
        }
      });
    } else {
      console.log('All IDs have been processed.');
    }
  }

  sendNextRequest();
}
