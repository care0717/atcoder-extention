// ==UserScript==
// @name        お前はGoogleがお似合いじゃ
// @namespace   
// @description お前はGoogleがお似合いじゃ
// @includes    *
// @excludes    
// ==/UserScript==

var anchor = document.getElementsByTagName('a');

for(var i in anchor){
  anchor[i].href = 'http://www.yahoo.co.jp/';
  anchor[i].addEventListener('click', clickAnchor);
}

function clickAnchor(e){
  alert('お前にはGoogleがお似合いじゃ');
  document.location = 'http://www.yahoo.co.jp/';
}
