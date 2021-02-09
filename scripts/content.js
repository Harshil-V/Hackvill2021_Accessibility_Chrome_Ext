document.onmouseup = function() {
    chrome.runtime.sendMessage({
        'summary': window.getSelection().toString()
    });
    console.log(textSelected.summary);
}

