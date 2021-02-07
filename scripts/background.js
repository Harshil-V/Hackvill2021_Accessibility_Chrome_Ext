    function textToSpeech(text) {
        let info = new SpeechSynthesisUtterance();
        info.volume = 1;
        info.rate = 1;
        info.pitch = 3;
        info.lang = 'en-us';
        info.text = text;
        speechSynthesis.speak(info);
    }

    document.onmouseup = function() {
        textToSpeech(textSelected.summary);
    };
