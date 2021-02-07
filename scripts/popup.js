var textSelected;

function onPageDetailsReceived(details) {
    console.log(details.summary);
	textSelected = details.summary;
}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Get the event page
    console.log("im in popup.js")
    $(function() {
        $('#tts').change(function() {
            if ($(this).prop('checked')){
                chrome.runtime.getBackgroundPage(function(eventPage) {
                    // Call the getPageInfo function in the event page, passing in
                    // our onPageDetailsReceived function as the callback. This injects
                    // content.js into the current tab's HTML
                    eventPage.getPageDetails(onPageDetailsReceived);
                });
            }
            else {
                speechSynthesis.cancel();
            }

        })
    })

});