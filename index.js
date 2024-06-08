const colorPickerEl = document.getElementById('color-picker')
const colorOptionEl = document.getElementById('color-option')
const colorContainerEl = document.getElementById('color-container')
const generateButton = document.getElementById('generate-button')

function getColors() {
    const colorCode = colorPickerEl.value.slice(1)
    const mode = colorOptionEl.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            colorContainerEl.innerHTML = ''
            for (let colors of data.colors) {
                colorContainerEl.innerHTML += `
                    <div class="color-column">
                        <div class="color-image" style="background-color: ${colors.hex.value}"></div>
                        <p id="color-hex" class="color-hex">${colors.hex.value}</p>
                    </div>
                `
            }

        })
}

colorContainerEl.addEventListener('click', (e) => {
    const color = e.target.style.backgroundColor

    if (!color) {
        return
    }

    const rgb = color.split('(')[1].split(')')[0].split(',')
    const hex = rgb.reduce((acc, curr) => {

        const newHexVal = parseInt(curr).toString(16).padStart(2, '0')
        return acc + newHexVal
    }, '#')

    navigator.clipboard.writeText(hex.toUpperCase())
    alert('Copied to clipboard ' + hex.toUpperCase())
})

generateButton.addEventListener('click', getColors)