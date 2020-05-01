
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

})

//helper functions
function errormsg(){
    let errordiv = document.createElement('div')
        let errormsg = document.createTextNode('This field is required')
        errordiv.appendChild(errormsg)
        document.getElementById('name-field').appendChild(errordiv)

        

}

//validating functions
function validateName (){
    let nameInput = document.querySelector('#name')
    let nameValue = nameInput.value 
    let parentEl = nameInput.parentElement 

    if(nameValue){
        console.log('name is valid')
        parentEl.classList.add('input-valid')
        parentEl.classList.remove('input-invalid')

    }else{
        console.log('name is not valid')
        parentEl.classList.add('input-invalid')
        parentEl.classList.remove('input-valid')
        errormsg()
    }


}

function validateCarYear (){
    let carYearInput = document.querySelector('#car-year')
    let carYearValue = carYearInput.value 
    let parentEl = carYearInput.parentElement 

    if(carYearValue){
        console.log('year is valid')
        parentEl.classList.add('input-valid')
        parentEl.classList.remove('input-invalid')

    }else{
        console.log('year is not valid')
        parentEl.classList.add('input-invalid')
        parentEl.classList.remove('input-valid')
        errormsg()
    }


}

function validateCarMake (){
    let carMakeInput = document.querySelector('#car-make')
    let carMakeValue = carMakeInput.value 
    let parentEl = carMakeInput.parentElement 

    if(carMakeValue){
        console.log('make is valid')
        parentEl.classList.add('input-valid')
        parentEl.classList.remove('input-invalid')

    }else{
        console.log('make is not valid')
        parentEl.classList.add('input-invalid')
        parentEl.classList.remove('input-valid')
        errormsg()
    }
}

    function validateCarModel() {
        let carModelInput = document.querySelector('#car-model')
        let carModelValue = carModelInput.value
        let parentEl = carModelInput.parentElement

        if (carModelValue){
            console.log('model is valid')
            parentEl.classList.add('input-valid')
            parentEl.classList.remove('input-invalid')
        } else {
            console.log('model is invalid')
            parentEl.classList.remove('input-valid')
            parentEl.classList.add('input-invalid')
            errormsg()
        }
          
    }


    function validateStartDate (){
        let startDateInput = document.querySelector('#start-date')
        let startDateValue = startDateInput.value 
        let parentEl = startDateInput.parentElement 
    
        if(startDateValue){
            console.log('date is valid')
            parentEl.classList.add('input-valid')
            parentEl.classList.remove('input-invalid')
    
        }else{
            console.log('date is not valid')
            parentEl.classList.add('input-invalid')
            parentEl.classList.remove('input-valid')
            errormsg()
        }
}

function validateNumOfDays(){
    let numOfDaysinput = document.querySelector('#days')
    let numOfDaysValue = numOfDaysinput.value
    let parentEl = numOfDaysinput.parentElement

    if(numOfDaysValue){
        console.log('number of days is valid')
        parentEl.classList.add('input-valid')
        parentEl.classList.remove('input-invalid')

    }else{
        console.log('number of days is not valid')
        parentEl.classList.add('input-invalid')
        parentEl.classList.remove('input-valid')
        errormsg()
    }
}

function validateCC(){
    let CCinput = document.querySelector('#credit-card')
    let CCValue = CCinput.value
    let parentEl = CCinput.parentElement

    if(CCValue){
        console.log('credit card number of days is valid')
        parentEl.classList.add('input-valid')
        parentEl.classList.remove('input-invalid')

    }else{
        console.log('credit card number is not valid')
        parentEl.classList.add('input-invalid')
        parentEl.classList.remove('input-valid')
        errormsg()
    }
}

function validateCVV(){
    let cvvinput = document.querySelector('#cvv')
    let cvvValue = cvvinput.value
    let parentEl = cvvinput.parentElement

    if(cvvValue){
        console.log('CVV is valid')
        parentEl.classList.add('input-valid')
        parentEl.classList.remove('input-invalid')

    }else{
        console.log('CVV is not valid')
        parentEl.classList.add('input-invalid')
        parentEl.classList.remove('input-valid')
        errormsg()
    }
}

function validateExpiration (){
    let expirationinput = document.querySelector('#expiration')
    let expirationValue = expirationinput.value
    let parentEl = expirationinput.parentElement

    if(expirationValue){
        console.log('expiration date is valid')
        parentEl.classList.add('input-valid')
        parentEl.classList.remove('input-invalid')

    }else{
        console.log('expiration date is not valid')
        parentEl.classList.add('input-invalid')
        parentEl.classList.remove('input-valid')
        errormsg()
    }
}