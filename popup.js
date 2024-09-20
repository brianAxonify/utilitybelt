document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startButton').addEventListener('click', async () => {
    // Get IDs from the textarea
    let ids = document.getElementById('idList').value;
    // Split IDs by commas or new lines and remove empty entries
    ids = ids.split(/[\s,]+/).filter(id => id.trim() !== '');

    if (ids.length === 0) {
      alert('Please enter at least one ID.');
      return;
    }

    // Get the active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Inject the content script and jQuery into the active tab
    try {
      // Inject jQuery
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['jquery.js']
      });

      // Inject content script
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.js']
      });

      // Send IDs to the content script
      chrome.tabs.sendMessage(tab.id, { action: 'startDeleting', ids: ids }, response => {
        if (chrome.runtime.lastError) {
          document.getElementById('status').textContent = 'Error: ' + chrome.runtime.lastError.message;
        } else {
          document.getElementById('status').textContent = 'Deletion started.';
        }
      });
    } catch (error) {
      document.getElementById('status').textContent = 'Error injecting scripts: ' + error;
    }
  });
});
