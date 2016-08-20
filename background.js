// Copyright (c) 2011 The Chromium Authors. All rights reserved.
	// Use of this source code is governed by a BSD-style license that can be
	// found in the LICENSE file.

	// Called when the user clicks on the browser action.
	//
	//
// 
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.greeting == "hello")
//       sendResponse({
//         msg: "goodbye!"
//       });
//   });

	chrome.browserAction.onClicked.addListener(function(tab) {
		var number = Math.floor((Math.random() * 4) + 1);
		var colorArray = ['red', 'blue', 'yellow', 'pink', 'orange'];

  // No tabs or host permissions needed!
	  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
	    // code: 'document.body.style.backgroundColor="red"'
			code: 'document.body.style.backgroundColor="' + colorArray[number] + '"'

	  });
	});
