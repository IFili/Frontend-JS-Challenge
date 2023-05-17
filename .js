const filterBySource = document.getElementsByName('filterBySource');

function filterImageWrappers() {
  const selectedSource = document.querySelector('input[name="filterBySource"]:checked').value; 
  const imageWrappers = document.querySelectorAll('.imageWrapper');

  imageWrappers.forEach((wrapper) => {
    const iconImage = wrapper.querySelector('.icon-image');

    if (selectedSource === 'all') {
      wrapper.style.display = 'block'; // Show all image wrappers
    } else if (iconImage.src.includes(`${selectedSource}.svg`)) {  
        //NOTE!!!! : selectedSource MUST BE 1 WORD OR ELSE IT CRASHES, ex: instagram.svg instead of instagram-logo
        
      wrapper.style.display = 'block'; // Show image wrappers with matching source
    } else {
      wrapper.style.display = 'none'; // Hide image wrappers without matching source
    }
  });
}

filterBySource.forEach((radio) => {
  radio.addEventListener('change', filterImageWrappers);
});
