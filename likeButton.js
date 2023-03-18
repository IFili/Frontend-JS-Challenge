function toggle(event) {

    const likeIcon = event.target;
    const likeCounter = likeIcon.nextElementSibling;
    const styles = window.getComputedStyle(likeIcon);

    let likes = parseInt(likeCounter.textContent);

    if (styles.color === "rgb(0, 0, 0)") {
        likeIcon.textContent = "\u2665";
        likeIcon.style.color = "red";
        likes++;
    } else if (styles.color === "rgb(255, 0, 0)") {
        likeIcon.textContent = "\u2661";
        likeIcon.style.color = "black";
        likes--;
    }

    likeCounter.textContent = likes;
}

const likeIcons = document.querySelectorAll('.like-icon');
likeIcons.forEach((likeIcon) => {
    const likeCounter = likeIcon.nextElementSibling;
    likeIcon.addEventListener('click', toggle);
});
