function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    textValueNumber = parseFloat(textValue);
    return textValueNumber;
}