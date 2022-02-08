
// First, tell us your name
let yourName = "Brandon Dega" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0
let gbQuantity = document.querySelector(`#qty-gb`)
let ccQuantity = document.querySelector(`#qty-cc`)
let sugarQuantity = document.querySelector(`#qty-sugar`)
let tableTotal = document.querySelector(`#qty-total`)

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

function updateTotal(){
    total = gb + cc + sugar
    tableTotal.textContent = total
}


// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    updateTotal()
    gbQuantity.textContent = gb
})

gbMinusBtn.addEventListener(`click`,function() {
    if(gb > 0){
        gb = gb - 1
        updateTotal()
        gbQuantity.textContent = gb
    }
})

ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    updateTotal()
    ccQuantity.textContent = cc
})

ccMinusBtn.addEventListener(`click`,function() {
    if(cc > 0){
        cc = cc - 1
        updateTotal()
        ccQuantity.textContent = cc
    }
})

sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    updateTotal()
    sugarQuantity.textContent = sugar
})

sugarMinusBtn.addEventListener(`click`,function() {
    if(sugar > 0){
        sugar = sugar - 1
        updateTotal()
        sugarQuantity.textContent = sugar
    }
})
