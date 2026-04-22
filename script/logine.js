document.getElementById('logine-btn')
.addEventListener('click', function () { 
   //1 get the mobile number input 
   const numberInput = document.getElementById('input-number');
    const ConstNumber = numberInput.value;
    console.log(ConstNumber);


   // 2 get the pin input
   const pinInput = document.getElementById('input-pin');
   const ConstPin = pinInput.value;
   console.log(ConstPin);

    // 3 check the mobile number and pin
    if(ConstNumber === '01700000000' && ConstPin === '1234'){
         // 3-1 True    >> alert > home
        alert('Login successful!')

        // window.location.replace("/home.html");
         window.location.assign("/home.html");



    }
   else{
       // 3-2 false   >> alert >  return to login page
       alert("login failed")
       return;

   }


})