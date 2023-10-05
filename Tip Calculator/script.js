var billAmtInp=document.querySelector('#billAmtInp');
var tipAmtInp=document.querySelector('#tipAmtInp');
var peopleNoInp=document.querySelector('#peopleInp');

var totalBill=document.querySelector('#totalBill')
var totalTip=document.querySelector('#totalTip')
var totalBillPerPerson=document.querySelector('#totalBillPerPerson')


function tip(newText){
    // var button=event.target;
    // button.textContent=newText
    tipAmtInp.value=newText;
}


function inc(){
    var peopleNo=Number(peopleNoInp.innerText);
    peopleNo++;
    peopleNoInp.innerText=peopleNo;
}

function dec(){
    var peopleNo=Number(peopleNoInp.innerText);
    peopleNo--;
    peopleNoInp.innerText=peopleNo;
}

function cal(){
    var billAmt=Number(billAmtInp.value);
    var tipAmt=Number(tipAmtInp.value);
    var peopleNo=Number(peopleNoInp.innerText);

    var finalTip=billAmt*(tipAmt/100);
    var finalBill=billAmt+finalTip;
    var finalBillPerPerson=(billAmt+finalTip)/peopleNo;
    
    totalBill.innerText=finalBill;
    totalTip.innerText=finalTip;
    totalBillPerPerson.innerText=finalBillPerPerson;
}

function reset(){
    billAmtInp.value=0;
    tipAmtInp.value=0;
    peopleNoInp.innerText=1;

    document.getElementById('totalBill').innerText = '0.00';
    document.getElementById('totalTip').innerText = '0.00';
    document.getElementById('totalBillPerPerson').innerText = '0.00';
}