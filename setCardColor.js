const imageWrappers = document.querySelectorAll('.imageWrapper');
const themeHexInput = document.querySelector('.cardBackgroundColor');
let selectedTheme = themeHexInput.value;
console.log(selectedTheme)

// Use default value if no value is provided. This has to exist for it to work
if (!selectedTheme) {
    selectedTheme = '#ffffff';
}
//with this, we prevent setting value with non-hex
themeHexInput.addEventListener('input', function () {
    const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    const inputValue = themeHexInput.value;

    if (inputValue.match(hexRegex)) {
        selectedTheme = inputValue;
        imageWrappers.forEach(imageWrapper => {
            imageWrapper.style.backgroundColor = selectedTheme;
        });
    }
});
