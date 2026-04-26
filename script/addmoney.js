document.getElementById("addMoney-btn").addEventListener("click", function () {

    // 1-bank account get
    const BankAccount = getValueFromInput("add-money-bank");
    if (BankAccount == "Select a Bank") {
        alert("place Select a Bank ");
        return;
    }

    //2- get bank account number
    const ADDMoneyNumber = getValueFromInput("add-Money-number");
    if (ADDMoneyNumber.length != 11) {
        alert(" invalid Account Number ");
        return;

    }

    //3- get amount

    const ADDMoneyAmount = getValueFromInput("add-Money-amount");
    const currentBalance = getBalance(); 
    const NewBalance = currentBalance + Number(ADDMoneyAmount);
    console.log(NewBalance);

    const pin = getValueFromInput("add-money-pin");
    if( pin === "1212" ){
        alert (`Add Money Success From ${BankAccount} at ${new Date()}`);
        SetBalance(NewBalance);
    }else{
        alert ("Invalid Pin");
        return;

    }



});