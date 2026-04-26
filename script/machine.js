console.log( "machine added")
// machine id --> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log( id ,value);
    return value;
}

// machine --> balance 
function getBalance(){
const balanceElement = document.getElementById('balance');
const balance = balanceElement.innerText;
console.log (" current balance: ", Number(balance));
return Number(balance);
}

//add money --> balance
function getaddMoneyBalance(){
    const ADDbalanceElement = document.getElementById('amount-add');
    const ADDbalance = ADDbalanceElement.innerText;
    console.log (" current balance: ", Number(amount-add));
    return Number(amount-add);
}


// machine value --> balance
function SetBalance (value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;

}