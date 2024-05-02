function displayMailingLabel(name,address,city,state,zip) {
    console.log(`your name is ${name} and your address is ${address} your city ${city} your state is ${state} and your zip ${zip }`);
}
displayMailingLabel ( 'alfi' , 'phoenix' , 'phoenix' ,  'arizona' ,  '00000');

//add two num
function addNumbers(num1,num2) {
    let reulte = num1 + num2 ;
    console.log(`${num1} + ${num2} = ${reulte}`);
}
addNumbers(2 ,3);
//Receipt

function displayReceipt(totalDue , amountpaid){
    if (totalDue === amountpaid) {
        console.log('you good to go and please vesit us again ');
        
    } else{
    console.log(`you have to pay $${totalDue - amountpaid}. or I'll call 911`);
    }
    
}
displayReceipt(40 , 30);
