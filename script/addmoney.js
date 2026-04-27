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
    if (pin === "1212") {
        alert(`Add Money Success From ${BankAccount} at ${new Date()}`);
        SetBalance(NewBalance);
        // 1 history-conteiner k dore niye asbo 

        const history = document.getElementById("history-conteiner");
        // 2 new div create korbo
        const newHistory = document.createElement("div");
        /// 3 new div inerhtml add korbo
        newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
         Add Money Success From
          ${BankAccount}  , acc-no ${ADDMoneyNumber} at ${new Date()}
            </div>
        `;
        //4 history container er modde new div append korbo
        history.appendChild(newHistory);
    } else {
        alert("Invalid Pin");
        return;

    }



});