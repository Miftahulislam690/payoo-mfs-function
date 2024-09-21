// document.getElementById('add-money-btn').addEventListener('click', function(event){
//     // event.preventDefault();
//     // getInputFieldValueById();
//     const addMoney = getInputFieldValueById();
//     console.log(addMoney)
// })

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // getInputFieldValueById();
    const addMoney = getInputFieldValueById('input-add-amount');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log(addMoney, pinNumber);
})