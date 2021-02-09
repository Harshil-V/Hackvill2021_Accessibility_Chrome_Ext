function textToSpeech(text) {
    let info = new SpeechSynthesisUtterance();
    info.volume = 1;
    info.rate = 1;
    info.pitch = 3;
    info.lang = 'en-us';
    info.text = text;
    window.speechSynthesis.speak(info);
    info.text = '';
    info.onend = function () {
        console.log("How it do");
        speechSynthesis.cancel();
    }
}

