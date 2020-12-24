//Variables
let originalInputButton = document.querySelector('.originalInputBtn');
let targetAmountInput = document.querySelector("[name=targetWeightAmount]");
let weeksLeftInput = document.querySelector('[name=weeksLeftAmount]');
let originalAvgCals = document.querySelector('[name=currentCalAvg]');
let amountPerWeek;
let weeklyCalcButton = document.querySelector('.weeklybtn');
let currentWeight = document.querySelector('[name=current_Weight]');
let goalWkWt;
let calcSection = document.getElementById(calculations);
let goalCals;

//functions
function goalsInputAction(event) {
    //Prevent Submission
    event.preventDefault();
    //Goal statement
    amountPerWeek = parseInt(targetAmountInput.value / weeksLeftInput.value);
    document.querySelector('#goalsOutput').innerHTML = `Based upon your answers, 
    you want to gain ${targetAmountInput.value}lbs in ${weeksLeftInput.value} weeks. 
    To do this you will need to gain ${amountPerWeek}lbs a week.
     <br>
     You are currently averaging ${originalAvgCals.value} calories per day. <br> Continue this
     amount during week one to figure out if it is the correct amount or how much to 
     adjust by.`;

};

function weeklyInputCalc(event){
    event.preventDefault();
    //Weight
    let wk1wt= [];
    let totalWt = 0;
     wk1wt[0] = parseInt(document.getElementById('wk1D1Wt').value);
     wk1wt[1] = parseInt(document.getElementById('wk1D2Wt').value);
     wk1wt[2] = parseInt(document.getElementById('wk1D3Wt').value);
     wk1wt[3] = parseInt(document.getElementById('wk1D4Wt').value);
     wk1wt[4] = parseInt(document.getElementById('wk1D5Wt').value);
     wk1wt[5] = parseInt(document.getElementById('wk1D6Wt').value);
     wk1wt[6] = parseInt(document.getElementById('wk1D7Wt').value);
    for (var i = 0; i < wk1wt.length; i++) {
            totalWt += wk1wt[i];
        
    }
    let avgWt = totalWt/wk1wt.length;
    console.log(avgWt);
    //Cals
    let wk1Cals =[]
    let totalCal = 0;
    wk1Cals[0] = parseInt(document.getElementById('wk1D1Cal').value);
    wk1Cals[1] = parseInt(document.getElementById('wk1D2Cal').value);
    wk1Cals[2] = parseInt(document.getElementById('wk1D3Cal').value);
    wk1Cals[3] = parseInt(document.getElementById('wk1D4Cal').value);
    wk1Cals[4] = parseInt(document.getElementById('wk1D5Cal').value);
    wk1Cals[5] = parseInt(document.getElementById('wk1D6Cal').value);
    wk1Cals[6] = parseInt(document.getElementById('wk1D7Cal').value);
   for (var i = 0; i < wk1Cals.length; i++) {
           totalCal += wk1Cals[i];
       
   }
   let avgCal = totalCal/wk1Cals.length;
   //Checks if working correctly
   console.log(avgCal);
   console.log(amountPerWeek);
   console.log(currentWeight.value);
   goalWkWt = parseInt(currentWeight.value) + parseInt(amountPerWeek);
   console.log(goalWkWt);
   //Calcs
   if (avgWt == goalWkWt) {
       goalCals = "You're on the right track! Keep your calories the same."
   } else if (avgWt > goalWkWt - .5 && avgWt < goalWkWt + .5){
       goalCals ="You're on the right track! Keep your calories the same."
   } else if ( avgWt > goalWkWt + .5){
       goalCals ='You are gaining too much. Cut down your daily calories by 500.'
    } else {
       goalCals = "You aren't gaining enough weight to stay on track. Add 500 calories to your daily diet to stay on track! "
    };

   //Calculations
   if (avgWt == goalWkWt) {
    console.log("You're on the right track! Keep your calories the same.")
} else if (avgWt > goalWkWt - .5 && avgWt < goalWkWt + .5){
    console.log("You're on the right track! Keep your calories the same. sss")
} else if ( avgWt > goalWkWt + .5){
    console.log('You are gaining too much. Cut down your calories')
 } else {
 console.log('You need to be taking more calories in!')
 };
   document.querySelector('#calculations').innerHTML = `Great job this week! We have 
   taken your goals and how you did this week and figured out what you should be doing
   next week.<br><br>
   You started out this week at ${currentWeight.value} and averaged ${avgWt} at the end
   of the week. Your goal was to end the week at ${goalWkWt}.<br><br>
   You took in an average of ${avgCal} calories per day.<br><br>
   Taking all of this into account, ${goalCals}.`

   //reset
   document.getElementById('wk1D1Wt').value = "";
   document.getElementById('wk1D2Wt').value = "";
   document.getElementById('wk1D3Wt').value = "";
   document.getElementById('wk1D4Wt').value = "";
   document.getElementById('wk1D5Wt').value = "";
   document.getElementById('wk1D6Wt').value = "";
   document.getElementById('wk1D7Wt').value = "";
   document.getElementById('wk1D1Cal').value = "";
   document.getElementById('wk1D2Cal').value = "";
   document.getElementById('wk1D3Cal').value = "";
   document.getElementById('wk1D4Cal').value = "";
   document.getElementById('wk1D5Cal').value = "";
   document.getElementById('wk1D6Cal').value = "";
   document.getElementById('wk1D7Cal').value = "";

}



//Events
originalInputButton.addEventListener("click", goalsInputAction);
weeklyCalcButton.addEventListener("click", weeklyInputCalc)
