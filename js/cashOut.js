document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('oi mama na plz')
    const cashOut = getInputFieldValueById('input-cash-out-amount');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    if(pinNumber === 5555){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-red-400');
        div.innerHTML = `
            <div class = 'mt-3 mb-4'>
                <h3 class = 'font-bold text-xl text-slate-50'>Cash Out</h3>
                <p class = 'text-slate-50'>${cashOut} Withdraw. New Balance ${newBalance}</p>
            </div>
        `

        document.getElementById('transaction-section').appendChild(div);
    }else{
        alert('তোর জন্য কোনো টাকা পয়সা নাই, দূরে গিয়া মর ।।')
    }
})