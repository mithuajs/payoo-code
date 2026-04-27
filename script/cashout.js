document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        const CashoutAgentNumber = getValueFromInput('agent-number');
        if (CashoutAgentNumber.length !== 11) {
            alert("invalid agent number")
            return;
        }
        //2 get the amount
        const CashoutAmountString = getValueFromInput('amount');

        const currentBalance = getBalance();
        //  4 calculate the new balance 
        const newBalance = currentBalance - Number(CashoutAmountString);

        console.log("New Balance: ", newBalance);
        if (newBalance < 0) {
            alert("invalid amount")
            return;
        }

        // 5 get the pin  and verify

        const pin = getValueFromInput('cashout-pin');
        if (pin === '1212') {
            alert(`  Cashout ${CashoutAmountString} Taka Success to ${CashoutAgentNumber} at ${new Date()}`);
            SetBalance(newBalance);

            // 1 history-conteiner k dore niye asbo 
            const history = document.getElementById("history-conteiner");
            // 2 new div create korbo
            const newHistory = document.createElement("div");
            /// 3 new div inerhtml add korbo
            newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
           Cashout ${CashoutAmountString} Taka Success to ${CashoutAgentNumber} at ${new Date()}
            </div>
        `;
            //4 history container er modde new div append korbo
            history.appendChild(newHistory);
        } else {
            alert("invalid pin")
            return;
        }


    })

//         //1 get the agent number  and validate
//         const CashoutAgentNumberInput = document.getElementById('agent-number');
//         const CashoutAgentNumber = CashoutAgentNumberInput.value;
//         console.log(CashoutAgentNumber);
//         if(CashoutAgentNumber.length !== 11){
//             alert("invalid agent number")
//             return;
//         }

//         //2 get the amount , validate , convert to number
//         const CashoutAmountInput = document.getElementById('amount');
//         const CashoutAmountString = CashoutAmountInput.value;
//         console.log(CashoutAmountString);

//         // 3 get the current balance , validate , convert to number

//         const balanceElement = document.getElementById('balance');
//         const balanceString = balanceElement.innerText;
//         console.log(balanceString);
//         //  4 calculate the new balance

//         const newBalance = Number(balanceString) - Number(CashoutAmountString);

//         if (newBalance < 0) {
//             alert("invalid amount")
//             return;
//         }


//         // 5 get the pin  and verify
//         const CashoutPinInput = document.getElementById('cashout-pin');
//         const pin = CashoutPinInput.value;
//         if (pin === '1212') {
//             alert("cashout successful")
//             console.log("New Balance: ", newBalance);
//             balanceElement.innerText = newBalance;

//         } else {
//             alert("invalid pin")
//             return;
//         }
//         //5-1 True: show an alert > set balance
//         //5-1 False: show an alert > return


//     })