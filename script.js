// The events for the first two functions have been handled in the html element

//Updating the input value
function updateInput(status, rank){
    const input= document.getElementById(rank+'-input');
    const amount= parseInt(input.value);
    let newAmount= amount;
    if(status=='increase'){
        newAmount= amount+ 1;
    }else if(status=="decrease" && amount>0){
        newAmount= amount- 1;
    }
    input.value= newAmount;
    countingExpense();
}

//Counting subtotal, VAT and total
function countingExpense(){
    const firstInput= document.getElementById('first-input');
    const economyInput= document.getElementById('economy-input');
 
    const firstAmount= parseInt(firstInput.value);
    const economyAmount= parseInt(economyInput.value);

    const subtotal= firstAmount*150+economyAmount*100;
    const vat= subtotal*0.1;
    const total= subtotal+vat;

    document.getElementById('subtotal').innerText=subtotal;
    document.getElementById('vat').innerText=vat;
    document.getElementById('total').innerText=total;
}

//Displaying confirmation
document.getElementById('submit').addEventListener('click', function() {
    const cost= document.getElementById('total').innerText;
    if(cost=='0'){      //Checking if the user hasn't choose any seat
        showMessage('warn');
    }else{
        showMessage('confirm');
    }
})

function showMessage(info) {
    const message= document.getElementById(info);
    message.style.display='block';
    setTimeout(function(){
        message.style.display= 'none';
    },3000)
}