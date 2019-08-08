(() => {
   const MAX_TIME = 10000;
   const digits = [
      document.querySelector("#secondTens"),
      document.querySelector("#secondOnes"),
      document.querySelector("#msHundreds"),
      document.querySelector("#msTens")
   ];
   let numMiliseconds = 0;
   
   //UI handler
   const updateUI = num => {
      const MAX_DIGITS = 4;
      let remainingDigits = num;

      for (let i = 0; i < MAX_DIGITS; i++) {
         const comparator = Math.pow(10, MAX_DIGITS - (i+1));
         const digit = Math.floor(remainingDigits / comparator);
         digits[i].textContent = digit;

         if (digit > 0) {
            remainingDigits %= comparator;
         }
      }

      // console.log(num);
   };

   //interval handler
   const updateTimer = () => {
      //update counter
      numMiliseconds += 10;

      //update UI
      updateUI(numMiliseconds / 10); //only work with the first 4 digits

      //stop timer if necessary
      if (numMiliseconds >= MAX_TIME) {
         clearInterval(timer);
         digits.forEach(digit => {
            digit.style.color = "red";
         });
         document.querySelector("#colon").style.color = "red";
      }
   };

   //start interval
   let timer = setInterval(updateTimer, 10);
   // window.updateUI = updateUI;
})();