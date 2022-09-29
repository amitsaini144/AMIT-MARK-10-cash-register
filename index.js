const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const error =document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll("#no-of-notes");

const availableNotes = [2000, 500, 100, 50,20, 10, 5, 1];

checkButton.addEventListener("click", function checkBillAndCash() {
    error.style.display ="none";

    if(billAmount.value > 0){
        
      if(Number(cashGiven.value) >= Number(billAmount.value)){
        // console.log("here",typeof cashGiven.value ,typeof billAmount.value,cashGiven.value >= billAmount.value);
        const cashReturn = cashGiven.value-billAmount.value;
         changeC(cashReturn);
      }
      else{
        errorMessage("Cash given can not be less than bill amount");
      }

    }
    else{
        errorMessage("Bill amount is not valid");
    }
} );

function errorMessage(message){
    error.style.display ="block";
    error.innerText = message;
}

function changeC(cashReturn){
  for( let i=0; i < availableNotes.length; i++ ){
    const numberOfNotes = Math.trunc(cashReturn/availableNotes[i]);
    cashReturn = cashReturn % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes.toString();
  }
}