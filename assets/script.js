let yourName = "Brandon Dega"

let gb = 0
let cc = 0
let sugar = 0
let total = 0
let gbQuantity = document.querySelector(`#qty-gb`)
let ccQuantity = document.querySelector(`#qty-cc`)
let sugarQuantity = document.querySelector(`#qty-sugar`)
let tableTotal = document.querySelector(`#qty-total`)

let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')

let buttons = [
    gbPlusBtn,
    gbMinusBtn,
    ccPlusBtn,
    ccMinusBtn,
    sugarPlusBtn,
    sugarMinusBtn
]

function updateTotal(){
    total = gb + cc + sugar
    tableTotal.textContent = total
}

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