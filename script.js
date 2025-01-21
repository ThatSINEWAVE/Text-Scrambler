function encode() {
    const inputText = document.getElementById('inputText').value;
    const decodingWord = document.getElementById('decodingWord').value.toLowerCase();
    let encodedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i);
        const newCharCode = charCode + decodingWord.length;
        encodedText += String.fromCharCode(newCharCode);
    }

    document.getElementById('outputText').value = encodedText;
}

function decode() {
    const inputText = document.getElementById('inputText').value;
    const decodingWord = document.getElementById('decodingWord').value.toLowerCase();
    let decodedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i);
        const originalCharCode = charCode - decodingWord.length;
        decodedText += String.fromCharCode(originalCharCode);
    }

    document.getElementById('outputText').value = decodedText;
}
