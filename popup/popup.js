console.log("I am popup.js");

document.getElementById("btn").onclick = function(e){
  hello();
}

document.getElementById("colorButton").onclick = function(e){
  changeColor();
}

function changeColor() {
  var color = document.getElementById('color_input').value;
  var number = Math.floor((Math.random() * 4) + 1);
  var colorArray = ['red', 'blue', 'yellow', 'pink', 'orange'];

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

function hello() {
  console.log("hello");
  var number = Math.floor((Math.random() * 4) + 1);
  var colorArray = ['red', 'blue', 'yellow', 'pink', 'orange'];

  chrome.tabs.executeScript({
  code: 'document.body.style.backgroundColor="' + colorArray[number] + '"'
});
  chrome.runtime.sendMessage({
      greeting: "hello"
    },
    function(response) {
      document.getElementById("div").textContent = response.msg;
    });
}
