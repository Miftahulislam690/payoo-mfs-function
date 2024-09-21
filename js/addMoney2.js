document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-amount');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(pinNumber === 5555){
        let count = 0;
        count++;
        const balance = getTextFieldValueById('account-balance');
        const totalBalance = balance + addMoney; 
        document.getElementById('account-balance').innerText = totalBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Count ${count} Added ${addMoney} TK. ${totalBalance}`;
        // console.log(p);
        document.getElementById('transaction-section').appendChild(p);
    }else{
        alert('তোর জন্য কোনো টাকা পয়সা নাই, দূরে গিয়া মর ।।');
    }
})