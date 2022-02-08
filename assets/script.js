
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

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    total = gb + cc + sugar
    gbQuantity.textContent = gb
    tableTotal.textContent = total
})

gbMinusBtn.addEventListener(`click`,function() {
    if(gb > 0){
        gb = gb - 1
        total = gb + cc + sugar
        gbQuantity.textContent = gb
        tableTotal.textContent = total
    }
})

ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    total = gb + cc + sugar
    ccQuantity.textContent = cc
    tableTotal.textContent = total
})

ccMinusBtn.addEventListener(`click`,function() {
    if(cc > 0){
        cc = cc - 1
        total = gb + cc + sugar
        ccQuantity.textContent = cc
        tableTotal.textContent = total
    }
})

sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    total = gb + cc + sugar
    sugarQuantity.textContent = sugar
    tableTotal.textContent = total
})

sugarMinusBtn.addEventListener(`click`,function() {
    if(sugar > 0){
        sugar = sugar - 1
        total = gb + cc + sugar
        sugarQuantity.textContent = sugar
        tableTotal.textContent = total
    }
})

// TODO: Hook up event listeners for the rest of the buttons