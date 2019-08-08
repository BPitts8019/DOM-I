(() => {
   const MAX_TIME = 10000;
   const btnStart = document.querySelector("#start");
   const btnReset = document.querySelector("#reset");
   const digits = [
      document.querySelector("#secondTens"),
      document.querySelector("#secondOnes"),
      document.querySelector("#msHundreds"),
      document.querySelector("#msTens")
   ];
   let timer;
   let numMiliseconds = 0;

   const resetTimer = () => {
      if (timer) clearInterval(timer);
      numMiliseconds = 0;

      digits.forEach(digit => {
         digit.textContent = "0";
         digit.classList.remove("redDigit");
      });
      document.querySelector("#colon").classList.remove("redDigit");

      btnStart.disabled = false;
   };

   const runTimer = () => {
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
               digit.classList.add("redDigit");
            });
            document.querySelector("#colon").classList.add("redDigit");

            btnStart.disabled = false;
         }
      };

      //reset timer
      resetTimer();
      btnStart.disabled = true;

      //start interval
      timer = setInterval(updateTimer, 10);
      // window.updateUI = updateUI;
   };

   //setup event listeners
   btnStart.addEventListener("click", runTimer);
   btnReset.addEventListener("click", resetTimer);
})();