chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ searchTerms: ["", "", "", ""] }, () => {
    console.log("The search terms have been initialized.");
  });
});