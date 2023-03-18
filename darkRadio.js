const preview = document.querySelector('.preview');
const radioButtons = document.querySelectorAll('input[name="theme"]');



// default theme must exist, white
preview.style.background = '#f9fafd';
preview.style.color = '#464b5b';

// listen for changes on the radio buttons
radioButtons.forEach(button => {
    button.addEventListener('change', (event) => {
        if (event.target.value === 'darkTheme') {
            preview.style.background = '#464b5b';
            preview.style.color = '#f9fafd';
        } else {
            preview.style.background = '#f9fafd';
            preview.style.color = '#464b5b';
        }
    });
});


;
