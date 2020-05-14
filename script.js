let form = document.querySelector('#parking-form')
    let name
    let formIsValid

    form.addEventListener ('submit', function (event) {
    
        event.preventDefault()
        new Form()
        giveCost()
    })

    class Form {
    constructor(){
            
            this.validateName()
            this.validateCar()
            this.validateStartDate()
            this.validateNumOfDays()
            this.validateCC()
            this.validateCVV()
            this.validateExpiration()   
            //this.giveCost()
            
        }
    

    //helper functions


luhnCheck(num) {
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

 makeValid(parentElement){
    parentElement.classList.add('input-valid')
    parentElement.classList.remove('input-invalid')

}

 makeInvalid(parentElement){
    parentElement.classList.add('input-invalid')
    parentElement.classList.remove('input-valid')
    formIsValid = false
}
//validating functions
validateName (){
    let nameInput = document.querySelector('#name')
    let nameValue = nameInput.value 
    let nameParent = nameInput.parentElement
    document.getElementsByTagName("label")[0].setAttribute("id", "name-label")
    let nameLabel = document.querySelector('#name-label') 

    if(nameValue){
        console.log('name is valid')
        this.makeValid(nameParent)
        nameLabel.textContent = 'Name'

    }else{
        console.log('name is not valid')
       this.makeInvalid(nameParent)
       nameLabel.textContent = 'Name is not valid'
       
    }
}

validateCar (){
    let carYearInput = document.querySelector('#car-year')
    carYearInput.setAttribute('type', 'number')
    let carYearValue = carYearInput.value 
    let carField = document.querySelector('#car-field')
    carField = carField.parentElement
    let carModelInput = document.querySelector('#car-model')
    let carModelValue = carModelInput.value
    let carMakeInput = document.querySelector('#car-make')
    let carMakeValue = carMakeInput.value 
    document.getElementsByTagName('label')[1].setAttribute('id', 'car-year-label')
    let carLabel = document.querySelector('#car-year-label') 
    
    
  
    if(carYearValue > 1900 && carYearValue <= 2020 && carModelValue !== '' && carMakeValue !== ''){
        console.log('year is valid')
       this.makeValid(carField)
       carLabel.textContent='Car'

    }else {
        
       this.makeInvalid(carField)
       carLabel.textContent = 'Year, Make, and Model are invalid'
    } 
}

    validateStartDate (){
        let startDateInput = document.querySelector('#start-date')
        let startDateValue = startDateInput.value
        console.log(startDateValue)
        startDateValue = new Date(startDateValue)
        let startdateparent = startDateInput.parentElement 
        let todaysDate = new Date()
        console.log (todaysDate)
        document.getElementsByTagName('label')[2].setAttribute('id', 'start-date-label')
        let startDateLabel = document.querySelector('#start-date-label')


        if( startDateValue > todaysDate){
            console.log('date is valid')
           this.makeValid(startdateparent)
           startDateLabel.textContent = 'Start Date'
    
        }else{
            console.log('date is not valid')
            this.makeInvalid(startdateparent)
            startDateLabel.textContent='Start date is invalid'
        }
}

validateNumOfDays(){
    let numOfDaysinput = document.querySelector('#days')
    numOfDaysinput.setAttribute('type', 'number')
    let numOfDaysValue = numOfDaysinput.value
    let numOfDaysParent = numOfDaysinput.parentElement
    document.getElementsByTagName('label')[3].setAttribute('id', 'days-label')
    let daysLabel = document.querySelector('#days-label')
    

    if(numOfDaysValue >= 1 && numOfDaysValue <= 30){
        console.log('number of days is valid')
        this.makeValid(numOfDaysParent)
        daysLabel.textContent = 'Number of Days'

    }else{
        console.log('number of days is not valid')
        this.makeInvalid(numOfDaysParent)
        daysLabel.textContent = 'Number of days is not valid'
    }
}


validateCC(){
    let CCinput = document.querySelector('#credit-card')
    let CCValue = CCinput.value
    let CCParent = CCinput.parentElement
    let CCregex = new RegExp ('^[0-9]{16}$')
    document.getElementsByTagName('label')[4].setAttribute('id', 'CC-label')
    let CCLabel = document.querySelector('#CC-label')

    if(CCValue && CCregex.test(CCValue) && this.luhnCheck(CCValue)){
        console.log('credit card number of days is valid')
        this.makeValid(CCParent)
        CCLabel.textContent = 'Credit Card'

    }else{
        console.log('credit card number is not valid')
        this.makeInvalid(CCParent)
        CCLabel.textContent = 'Credit Card Number is invalid'
    }
   
}



validateCVV(){
    let cvvinput = document.querySelector('#cvv')
    let cvvValue = cvvinput.value
    let cvvParent= cvvinput.parentElement
    let cvvregex= new RegExp("^[0-9]{3}$")
    document.getElementsByTagName('label')[5].setAttribute('id', 'cvv-label')
    let cvvLabel = document.querySelector('#cvv-label')
    //must be a 3 digit number (regx?)
    if(cvvValue && cvvregex.test(cvvValue)){
        console.log('CVV is valid')
        this.makeValid(cvvParent)
        cvvLabel.textContent = 'CVV'

    }else{
        console.log('CVV is not valid')
       this.makeInvalid(cvvParent)
        cvvLabel.textContent = 'CVV is invalid'
    }
}


validateExpiration (){
    let expirationinput = document.querySelector('#expiration')
    let expirationValue =  expirationinput.value
    let expMonth = expirationValue.substring(0,2)
    let expYear = expirationValue.substring(3)
    let todaysDate = new Date ()
    let todayMonth = todaysDate.getMonth() +1
    let todayYear =todaysDate.getFullYear() %100 
    let expirationparent = expirationinput.parentElement
    
    document.getElementsByTagName('label')[6].setAttribute('id', 'exp-label')
    let expLabel = document.querySelector('#exp-label')
  
    if(expYear >= todayYear && expMonth >= todayMonth){
        console.log('expiration date is valid')
        this.makeValid(expirationparent)
        expLabel.textContent ='Expiration Date'

    }else {
        console.log('expiration date is not valid')
        this.makeInvalid(expirationparent)
        expLabel.textContent ='Expiration Date is not valid'
    }
}

/*giveCost() {
    let dateInput = document.querySelector("#start-date")
        let dateInfo = dateInput.valueAsNumber 
        let dateParent = dateInput.parentElement
        let day = new Date(dateInfo).getDay();
        let daysInput = document.querySelector("#days")
        let daysInfo = daysInput.value 
        dateInfo = new Date(dateInfo);
        let cost = 0
        let week = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
        for (let i = 0; i < this.daysInfo; i++) {
            if (this.day === 5 || this.day === 6) {
                cost += 7;
            }else {
                this.cost += 5;
            }
            console.log(cost)
            this.day = (day % 7) + 1;
        }  
        window.alert("Your total is $" + cost + ".00")
    }*/

}

    


    function giveCost() {
        let dateInput = document.querySelector("#start-date")
            let dateInfo = dateInput.valueAsNumber 
            let dateParent = dateInput.parentElement
            let day = new Date(dateInfo).getDay();
            let daysInput = document.querySelector("#days")
            let daysInfo = daysInput.value 
            dateInfo = new Date(dateInfo);
            let cost = 0
            let week = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
            for (let i = 0; i < daysInfo; i++) {
                if (day === 5 || day === 6) {
                    cost += 7;
                }else {
                    cost += 5;
                }
                console.log(cost)
                 day = (day % 7) + 1;
            }  
            window.alert("Your total is $" + cost + ".00")
        }












    
