chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'selectParagraph') {
      var selectedText = request.selectedText;
      sendToBackend(selectedText);
    }
  });
  
  function sendToBackend(text) {
    // Implement logic to send 'text' to your backend with AI processing
    console.log('Selected Text:', text);
  }
  