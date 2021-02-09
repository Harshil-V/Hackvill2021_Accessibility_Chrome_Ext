var textSelected;
let isActiveState;

function onPageDetailsReceived(details) {
    console.log(details.summary);
	textSelected = details.summary;
}

function calltoSpeech(textCheck) {
    console.log(isActiveState);
    textCheck.addEventListener('change',function (){
        if (this.checked){
            isActiveState = this.checked;
            chrome.runtime.getBackgroundPage(function(eventPage) {
                // Call the getPageInfo function in the event page, passing in
                // our onPageDetailsReceived function as the callback. This injects
                // content.js into the current tab's HTML
                chrome.storage.local.set({'checkedIS': isActiveState},function (){
                    eventPage.getPageDetails(onPageDetailsReceived);
                    console.log(isActiveState);
                });
            });
        }
        if (!this.checked){
            speechSynthesis.cancel();
            isActiveState = this.checked;
            chrome.storage.local.set({'checkedIS': isActiveState},function (){
                console.log(isActiveState);
            });
        }

    })
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Get the event page
    console.log("im in popup.js");
    const textCheck = document.querySelector("input[name=toggle]");
    isActiveState = false;
    chrome.storage.local.get(['checkedIS'],function (result){
        isActiveState = result.checkedIS;
        if (isActiveState){
            textCheck.checked = true;
        }
        else {
            speechSynthesis.cancel();
            textCheck.checked = false;
        }
        calltoSpeech(textCheck);
    });

    });