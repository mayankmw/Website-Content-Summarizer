/* global chrome */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getTabContent") {
    // Use chrome.tabs.query to get the active tab if sender.tab is not available
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) {
        console.error("No active tab found.");
        sendResponse({ content: "No active tab found." });
      } else {
        const tabId = tabs[0].id;
        chrome.scripting.executeScript(
          {
            target: { tabId: tabId },
            func: () => document.body ? document.body.innerText : "No accessible content.",
          },
          (results) => {
            if (chrome.runtime.lastError) {
              console.error("Error executing script:", chrome.runtime.lastError.message);
              sendResponse({ content: "Error accessing page content." });
            } else {
              sendResponse({ content: results[0]?.result || "No content found." });
            }
          }
        );
      }
    });
    
    return true; // Keeps the message channel open for async response
  }
});

