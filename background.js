// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'deletionCompleted') {
    // Clear badge text
    chrome.action.setBadgeText({ text: '' });
    // Create a notification
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Bulk Delete IDs',
      message: 'All IDs have been processed.',
      priority: 2
    });
  } else if (message.action === 'updateProgress') {
    // Update badge text with remaining count
    const remainingText = message.remaining.toString();
    chrome.action.setBadgeText({ text: remainingText });
    chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
  }
});
