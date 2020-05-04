
 console.log('Add validation!');
let form = document.querySelector('#parking-form')
let name
let formIsValid



form.addEventListener ('submit', function (event) {
    
    event.preventDefault()
    
    validateName()
    validateCar()
    validateStartDate()
    validateNumOfDays()
    validateCC()
    validateCVV()
    validateExpiration()   
    //removeErrorMessage()
})

//helper functions


function luhnCheck(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        var intVal = parseInt(num.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function makeValid(parentElement){
    parentElement.classList.add('input-valid')
    parentElement.classList.remove('input-invalid')

}

 function makeInvalid(parentElement){
    parentElement.classList.add('input-invalid')
    parentElement.classList.remove('input-valid')
    formIsValid = false
}

function errormsg(fieldID){
    let errordiv = document.createElement('div')
    let errormsg = document.createTextNode('This field is required')
    errordiv.appendChild(errormsg)
    document.getElementById(fieldID).appendChild(errordiv)
}

/*function removeErrorMessage () {
    let errormsg = document.getElementById('errordiv')
    errormsg.remove() 
}*/



//validating functions
function validateName (){
    let nameInput = document.querySelector('#name')
    let nameValue = nameInput.value 
    let nameParent = nameInput.parentElement
    document.getElementsByTagName("label")[0].setAttribute("id", "name-label")
    let nameLabel = document.querySelector('#name-label') 

    if(nameValue){
        console.log('name is valid')
        makeValid(nameParent)
        nameLabel.textContent = 'Name'

    }else{
        console.log('name is not valid')
       makeInvalid(nameParent)
       nameLabel.textContent = 'Name is not valid'
       
    }
}

function validateCar (){
    let carYearInput = document.querySelector('#car-year')
    let carYearValue = carYearInput.value 
    let carField = document.querySelector('#car-field')
    carField = carField.parentElement
    let carModelInput = document.querySelector('#car-model')
    let carModelValue = carModelInput.value
    let carMakeInput = document.querySelector('#car-make')
    let carMakeValue = carMakeInput.value 
    document.getElementsByTagName('label')[1].setAttribute('id', 'car-year-label')
    let carLabel = document.querySelector('#car-year-label') 
    
  
    if(Number.isInteger(carYearValue) && carYearValue > 1900 && carYearValue <= 2020 && carModelValue !== '' && carMakeValue !== ''){
        console.log('year is valid')
       makeValid(carField)
       carLabel.textContent='Car'

    }else {
        
       makeInvalid(carField)
       carLabel.textContent = 'Year, Make, and Model are invalid'
    } 
}

/*function validateCarMake (){
     

    if(carMakeValue){
        console.log('make is valid')
        makeValid(makeparent)

    }else{
        console.log('make is not valid')
       makeInvalid(makeparent)
        errormsg('car-field')
    }
}

    function validateCarModel() {
       

        if (carModelValue){
            console.log('model is valid')
            makeValid(modelparent)
        } else {
            console.log('model is invalid')
            makeInvalid(modelparent)
            errormsg('car-field')
        }
          
    }*/


    function validateStartDate (){
        let startDateInput = document.querySelector('#start-date')
        let startDateValue = startDateInput.value
        console.log(startDateValue)
        startDateValue = new Date(startDateValue)
        let startdateparent = startDateInput.parentElement 
        let todaysDate = new Date()
        console.log (todaysDate)
        document.getElementsByTagName('label')[2].setAttribute('id', 'start-date-label')
        let startDateLabel = document.querySelector('#start-date-label')
        //determine current date and store in variable
        //compare to startDateValue
        //need to convert startDateValue into date object to compare to todaysDate

        if( startDateValue > todaysDate){
            console.log('date is valid')
           makeValid(startdateparent)
           startDateLabel.textContent = 'Start Date'
    
        }else{
            console.log('date is not valid')
            makeInvalid(startdateparent)
            startDateLabel.textContent='Start date is invalid'
        }
}

function validateNumOfDays(){
    let numOfDaysinput = document.querySelector('#days')
    let numOfDaysValue = numOfDaysinput.value
    let numOfDaysParent = numOfDaysinput.parentElement
    document.getElementsByTagName('label')[3].setAttribute('id', 'days-label')
    let daysLabel = document.querySelector('#days-label')

    if(Number.isInteger(numOfDaysValue) && numOfDaysValue >= 1 && numOfDaysValue <= 30){
        console.log('number of days is valid')
        makeValid(numOfDaysParent)
        daysLabel.textContent = 'Number of Days'

    }else{
        console.log('number of days is not valid')
        makeInvalid(numOfDaysParent)
        daysLabel.textContent = 'Number of days is not valid'
    }
}


function validateCC(){
    let CCinput = document.querySelector('#credit-card')
    let CCValue = CCinput.value
    let CCParent = CCinput.parentElement
    let CCregex = new RegExp ('^[0-9]{16}$')
    document.getElementsByTagName('label')[4].setAttribute('id', 'CC-label')
    let CCLabel = document.querySelector('#CC-Label')

    if(CCValue && CCregex.test(CCValue) && luhnCheck(CCValue)){
        console.log('credit card number of days is valid')
        makeValid(CCParent)
        CCLabel.textContent = 'Credit Card'

    }else{
        console.log('credit card number is not valid')
        makeInvalid(CCParent)
        CCLabel.textContent = 'Credit Card Number is invalid'
    }
   
}



function validateCVV(){
    let cvvinput = document.querySelector('#cvv')
    let cvvValue = cvvinput.value
    let cvvParent= cvvinput.parentElement
    let cvvregex= new RegExp("^[0-9]{3}$")
    document.getElementsByTagName('label')[5].setAttribute('id', 'cvv-label')
    let cvvLabel = document.querySelector('#cvv-label')
    //must be a 3 digit number (regx?)
    if(cvvValue && cvvregex.test(cvvValue)){
        console.log('CVV is valid')
        makeValid(cvvParent)
        cvvLabel.textContent = 'CVV'

    }else{
        console.log('CVV is not valid')
       makeInvalid(cvvParent)
        cvvLabel.textContent = 'CVV is invalid'
    }
}


function validateExpiration (){
    let expirationinput = document.querySelector('#expiration')
    let expirationValue = expirationinput.value
    let expirationparent = expirationinput.parentElement
    document.getElementsByTagName('label')[6].setAttribute('id', 'exp-label')
    let expLabel = document.querySelector('#exp-label')

    expirationValue = new Date(expirationValue)
    let expMonth = expirationValue.getMonth() 
    let expYear = expirationValue.getFullYear()
    let todaysDate = new Date()
    let validMonth = todaysDate.getMonth()
    let validYear = todaysDate.getFullYear() 
    

    if(expirationValue && expYear >= validYear && expMonth >= validMonth){
        console.log('expiration date is valid')
        makeValid(expirationparent)
        expLabel.textContent ='Expiration Date'

    }else {
        console.log('expiration date is not valid')
        makeInvalid(expirationparent)
        expLabel.textContent ='Expiration Date is not valid'
    }
}

function totalCost (numOfDaysValue, startDateValue){
    //loop (?) through number of days to find if weekday or weekend
    //determine how many weekdays(5) and weekend days (7)
    //find sum  
    //print total in new div at click
    //total should disappear if form becomes invalid
    
}