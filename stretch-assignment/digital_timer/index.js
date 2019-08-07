(() => {
   const MAX_TIME = 10000;
   const digits = [
      document.querySelector("#msTens"),
      document.querySelector("#msHundreds"),
      document.querySelector("#secondOnes"),
      document.querySelector("#secondTens")
   ];
   let numMiliseconds = 0;
   
   //interval handler
   const updateTimer = () => {
      //update counter
      numMiliseconds += 10;

      //update UI
      console.log(numMiliseconds);

      //stop timer if necessary
      if (numMiliseconds >= MAX_TIME) {
         clearInterval(timer);
         digits.forEach(digit => {
            digit.style.color = "red";
         });
      }
   };

   //start interval
   let timer = setInterval(updateTimer, 10);
})();