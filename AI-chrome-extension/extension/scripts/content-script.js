chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'selectParagraph') {
    var selectedText = window.getSelection().toString().trim();
    // Send selected text to the backend API for AI processing
    sendToBackend(selectedText);
  }
});

function sendToBackend(text) {
  // Implement logic to send 'text' to your backend with AI processing
  // You can use AJAX, fetch, or other methods to send data to your backend API
  console.log('Selected Text:', text);
}

document.addEventListener('contextmenu', function(event) {
// Check if the right mouse button is clicked
if (event.button === 2) {
  // Get the selected text
  var selectedText = window.getSelection().toString().trim();

  // Send the selected text to the background script
  chrome.runtime.sendMessage({ action: 'selectParagraph', selectedText: selectedText });
}
});