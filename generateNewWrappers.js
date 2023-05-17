function getWrappers() {

  const container = document.querySelector('.generateRowContainer');


  for (let i = 0; i < 2; i++) {

    const row = document.createElement('div');
    row.classList.add('newRow');


    for (let j = 0; j < 2; j++) {

      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('imageWrapper');

      // Create the HTML structure for the imageWrapper
      imageWrapper.innerHTML = `
      <div class="upperRow">
        <div class="profileImage"> <img class="profileImageId" src="https://placekitten.com/g/150/100" alt=""></div>
        <div class="textContainer">
          <div class="name">name here</div>
          <div class="date">date here</div>
          <!-- <div class="type">type here</div> -->
        </div>
        <div class="icon">
          <img class="icon-image" src="facebook.svg">
        </div>
      </div>
      <div class="postImage">
        <img class="postImage-img" src="">
      </div>
      <div class="caption">
        <p class="caption-text"></p>
      </div>
      <div class="likeWrapper">
        <button class="like-icon" data-likes="0">&#x2661;</button>
        <span class="like-counter">0</span>
      </div>
    `;

      // Append the imageWrapper to the row
      row.appendChild(imageWrapper);
    }

    // Append the row to the container
    container.appendChild(row);
  }

}