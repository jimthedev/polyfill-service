var _mutation=function(){function e(e){return"function"==typeof Node?e instanceof Node:e&&"object"==typeof e&&e.nodeName&&e.nodeType>=1&&e.nodeType<=12}return function(n){if(1===n.length)return e(n[0])?n[0]:document.createTextNode(n[0]+"");for(var t=document.createDocumentFragment(),o=0;o<n.length;o++)t.appendChild(e(n[o])?n[o]:document.createTextNode(n[o]+""));return t}}();