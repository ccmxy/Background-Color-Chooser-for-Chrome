
document.getElementById("colorButton").onclick = function(e){
  changeColor();
}

function changeColor() {
  chrome.tabs.executeScript({
  code: 'document.body.style.backgroundColor="' + color + '"'
});
  chrome.runtime.sendMessage({
      greeting: "hello"
    },
    function(response) {
      document.getElementById("div").textContent = response.msg;
    });
}
