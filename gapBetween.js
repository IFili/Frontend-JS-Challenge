const selectRows = document.querySelectorAll('.row');
const gapInput = document.querySelector('.cardSpaceBetween');
let selectedGap = gapInput.value;

if (!selectedGap) {
    selectedGap = "10px";
}

gapInput.addEventListener('input', function () {
    selectRows.forEach(selectRow => {
        selectRow.style.gap = gapInput.value;
    });
});

console.log(gapInput);
console.log(selectedGap);
