//THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THEINITIAL BALANCE & SECURITY DATA
let Pin = "9023"; //this is the pin stored for the user
let userBalance= 1000;

// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
let enteredPin = prompt("Welcome to Student Bank ATM. Please enter your pin here");
console.log(typeof{enteredPin}); //string

// 3. VALIDATE / CHECK THE PIN NUMBER
if(enteredPin === Pin){
    let userAmount = prompt(`PIN ACCEPTED! Your current balance is ${userBalance}.
         Enter amount to withdraw`);
    console.log(typeof(userAmount)); //string
    userAmount=Number(userAmount);
    console.log(typeof(userAmount)); //output will be a number
    if(userBalance >= userAmount){
         userBalance = userBalance - userAmount;
        //userBalance-=userAmount

        receiptText.innerText = "TRANSACTION SUCCESSFUL";
        receiptText.innerText=`Transaction declined..`}}else{
        //prompt(`Enter the correct PIN`);

}

    
    
    
    
    // 4. CHECK AVAILABILITY OF FUNDS
    
        
    
        

    
    // TASK 6: Handle the error layout if the PIN was completely wrong
    