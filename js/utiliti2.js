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

function showSectionById(id){
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}