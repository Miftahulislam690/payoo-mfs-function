document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-amount');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(pinNumber === 5555){
        const balance = getTextFieldValueById('account-balance');
        const totalBalance = balance + addMoney; 
        document.getElementById('account-balance').innerText = totalBalance;
    }else{
        alert('Failed to add money');
    }
})