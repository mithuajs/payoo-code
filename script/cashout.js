document.getElementById('cashout-btn')
    .addEventListener('click', function () {

        //1 get the agent number  and validate
        const CashoutAgentNumberInput = document.getElementById('agent-number');
        const CashoutAgentNumber = CashoutAgentNumberInput.value;
        console.log(CashoutAgentNumber);
        if(CashoutAgentNumber.length !== 11){
            alert("invalid agent number")
            return;
        }

        //2 get the amount , validate , convert to number
        const CashoutAmountInput = document.getElementById('amount');
        const CashoutAmountString = CashoutAmountInput.value;
        console.log(CashoutAmountString);

        // 3 get the current balance , validate , convert to number

        const balanceElement = document.getElementById('balance');
        const balanceString = balanceElement.innerText;
        console.log(balanceString);
        //  4 calculate the new balance 

        const newBalance = Number(balanceString) - Number(CashoutAmountString);

        if (newBalance < 0) {
            alert("invalid amount")
            return;
        }


        // 5 get the pin  and verify
        const CashoutPinInput = document.getElementById('cashout-pin');
        const pin = CashoutPinInput.value;
        if (pin === '1212') {
            alert("cashout successful")
            console.log("New Balance: ", newBalance);
            balanceElement.innerText = newBalance;

        } else {
            alert("invalid pin")
            return;
        }
        //5-1 True: show an alert > set balance
        //5-1 False: show an alert > return 


    })