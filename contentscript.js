var s = document.createElement('inject');
s.src = chrome.extension.getURL('inject.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);