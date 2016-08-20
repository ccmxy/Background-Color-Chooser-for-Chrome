
document.getElementById("colorButton").onclick = function(e){
  changeColor();
}

function changeColor() {
  var color = document.getElementById('color_input').value;
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
