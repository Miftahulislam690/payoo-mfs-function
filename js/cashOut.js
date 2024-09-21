document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('oi mama na plz')
    const cashOut = getInputFieldValueById('input-cash-out-amount');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    if(pinNumber === 5555){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('তোর জন্য কোনো টাকা পয়সা নাই, দূরে গিয়া মর ।।')
    }
})