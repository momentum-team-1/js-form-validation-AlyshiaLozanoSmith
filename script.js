
 console.log('Add validation!');
let form = document.querySelector('#parking-form')
let name
let formIsValid

form.addEventListener ('submit', function (event) {
    event.preventDefault()
    validateName()
    validateCarYear()
    validateCarMake()
    validateCarModel()
    validateStartDate()
    validateNumOfDays()
    validateCC()
    validateCVV()
    validateExpiration()
    removeErrorMessage()
      

})

//helper functions

function makeValid(parentElement){
    parentElement.classList.add('input-valid')
    parentElement.classList.remove('input-invalid')

}

 function makeInvalid(parentElement){
    parentElement.classList.add('input-invalid')
    parentElement.classList.remove('input-valid')
}

function errormsg(fieldID){
    let errordiv = document.createElement('div')
    let errormsg = document.createTextNode('This field is required')
    errordiv.appendChild(errormsg)
    document.getElementById(fieldID).appendChild(errordiv)
}

//validating functions
function validateName (){
    let nameInput = document.querySelector('#name')
    let nameValue = nameInput.value 
    let nameParent = nameInput.parentElement 

    if(nameValue){
        console.log('name is valid')
        makeValid(nameParent)

    }else{
        console.log('name is not valid')
       makeInvalid(nameParent)
       errormsg('name-field')
    }
}

function validateCarYear (){
    let carYearInput = document.querySelector('#car-year')
    let carYearValue = carYearInput.value 
    let yearParent = carYearInput.parentElement 

    if(carYearValue > 1900 ){
        console.log('year is valid')
       makeValid(yearParent)

    }else{
        console.log('year is not valid')
       makeInvalid(yearParent)
        errormsg('car-field')
    }
}

function validateCarMake (){
    let carMakeInput = document.querySelector('#car-make')
    let carMakeValue = carMakeInput.value 
    let makeparent = carMakeInput.parentElement 

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
        let carModelInput = document.querySelector('#car-model')
        let carModelValue = carModelInput.value
        let modelparent = carModelInput.parentElement

        if (carModelValue){
            console.log('model is valid')
            makeValid(modelparent)
        } else {
            console.log('model is invalid')
            makeInvalid(modelparent)
            errormsg('car-field')
        }
          
    }


    function validateStartDate (){
        let startDateInput = document.querySelector('#start-date')
        let startDateValue = startDateInput.value 
        let startdateparent = startDateInput.parentElement 
    
        if(startDateValue){
            console.log('date is valid')
           makeValid(startdateparent)
    
        }else{
            console.log('date is not valid')
            makeInvalid(startdateparent)
            errormsg('start-date-field')
        }
}

function validateNumOfDays(){
    let numOfDaysinput = document.querySelector('#days')
    let numOfDaysValue = numOfDaysinput.value
    let numOfDaysParent = numOfDaysinput.parentElement

    if(numOfDaysValue){
        console.log('number of days is valid')
        makeValid(numOfDaysParent)

    }else{
        console.log('number of days is not valid')
        makeInvalid(numOfDaysParent)
        errormsg('days-field')
    }
}

function validateCC(){
    let CCinput = document.querySelector('#credit-card')
    let CCValue = CCinput.value
    let CCParent = CCinput.parentElement

    if(CCValue){
        console.log('credit card number of days is valid')
        makeValid(CCParent)

    }else{
        console.log('credit card number is not valid')
        makeInvalid(CCParent)
        errormsg('credit-card-field')
    }
}

function validateCVV(){
    let cvvinput = document.querySelector('#cvv')
    let cvvValue = cvvinput.value
    let cvvParent= cvvinput.parentElement

    if(cvvValue){
        console.log('CVV is valid')
        makeValid(cvvParent)

    }else{
        console.log('CVV is not valid')
       makeInvalid(cvvParent)
        errormsg("cvv-field")
    }
}


function validateExpiration (){
    let expirationinput = document.querySelector('#expiration')
    let expirationValue = expirationinput.value
    let expirationparent = expirationinput.parentElement

    if(expirationValue){
        console.log('expiration date is valid')
        makeValid(expirationparent)

    }else{
        console.log('expiration date is not valid')
        makeInvalid(expirationparent)
        errormsg('expiration-field')
    }
}