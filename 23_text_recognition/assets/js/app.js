const getTextAreaValue = document.querySelector('textarea');
const startSpeak = document.querySelector('#speak');
const stopSpeak = document.querySelector('#stop');
let getSelect = document.querySelector('select');

const getRate = document.querySelector('input[name="rate"]');
const getPitch = document.querySelector('input[name="pitch"]');

let textArea = getTextAreaValue.value;


let getVoice = new SpeechSynthesisUtterance(textArea);
const synth = window.speechSynthesis;

const awaitVoices = new Promise(done => speechSynthesis.onvoiceschanged = done);

function listVoices() {
    awaitVoices.then(()=> {
        let voices = speechSynthesis.getVoices();
        
        voices.map(item => {
            getSelect.innerHTML += `<option name="${item.name}" data-lang="${item.lang}">${item.name} ${item.lang}</option>`;
        })
    });
};
listVoices();

let langOption = '';
let rate = 0;
let pitch = 0;

getTextAreaValue.addEventListener('input', (e) => {
    textArea = e.target.value;
});

getSelect.addEventListener('input', (e) => {
    langOption = e.target.selectedOptions[0].dataset.lang;
    getVoice = new SpeechSynthesisUtterance(textArea);
    getVoice.lang = langOption;
    synth.speak(getVoice);
});

stopSpeak.addEventListener('click', () => {
    const getVoice = new SpeechSynthesisUtterance(textArea);
    synth.cancel();
});

getRate.addEventListener('input', (e) => {
    getVoice = new SpeechSynthesisUtterance(textArea);
    rate = e.target.value;
    getVoice.rate = e.target.value;
    getVoice.lang = langOption;
    synth.speak(getVoice); 
});

getPitch.addEventListener('input', (e) => {
    getVoice = new SpeechSynthesisUtterance(textArea);
    pitch = e.target.value;
    getVoice.pitch = e.target.value;
    getVoice.lang = langOption;
    synth.speak(getVoice); 
});

startSpeak.addEventListener('click', () => {
    getVoice = new SpeechSynthesisUtterance(textArea);
    getVoice.rate = rate;
    getVoice.pitch = pitch
    getVoice.lang = langOption;
    synth.speak(getVoice);  
});

