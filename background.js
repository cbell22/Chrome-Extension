let color = '#000000';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: "#ffc4f0" });
  console.log('Default background color set to %cpink', `color: ${color}`);
});