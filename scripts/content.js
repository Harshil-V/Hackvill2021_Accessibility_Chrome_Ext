document.onmouseup = function() {
    chrome.runtime.sendMessage({
        'summary': window.getSelection().toString()
    });
}

