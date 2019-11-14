chrome.runtime.sendMessage({
  action: "community-data",
  content: document.documentElement.outerHTML
});