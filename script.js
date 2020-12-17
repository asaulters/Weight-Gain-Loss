//Variables
let originalInputButton = document.querySelector('.originalInputBtn');
let targetAmountInput = document.querySelector("[name=targetWeightAmount]");
let weeksLeftInput = document.querySelector('[name=weeksLeftAmount]');
let originalAvgCals = document.querySelector('[name=currentCalAvg]');
let amountPerWeek;


//functions
function goalsInputAction(event) {
    //Prevent Submission
    event.preventDefault();
    //Goal statement
    amountPerWeek = targetAmountInput.value / weeksLeftInput.value;
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
    
}



//Events
originalInputButton.addEventListener("click", goalsInputAction);
