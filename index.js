const colorPickerEl = document.getElementById('color-picker')
const colorOptionEl = document.getElementById('color-option')
const generateColorButton = document.getElementById('generate-button')

function getColors() {
    const colorCode = colorPickerEl.value.slice(1)
    console.log(colorCode)
    fetch('https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=5')
        .then(res => res.json())
        .then(data => console.log(data))
}

getColors()

