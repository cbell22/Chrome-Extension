let changeColor = document.getElementById("changeColor");
let reset = document.getElementById("reset");


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
 
});
//chrome.storage.sync.get("color", ({ color}) => {
  //reset.style.backgroundColor = null;
//});
//CHANGE COLOR BUTTON//
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  //RESET BUTTON//
  reset.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: resetPageBackgroundColor,
    });
  });
  function resetPageBackgroundColor(){
    document.body.style.backgroundColor = null; 

  }
  
  //trying to just use event listeners to change the background color as necesary
  function setColor() {
   chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
          //document.body.style.backgroundColor = null;
    });
  }