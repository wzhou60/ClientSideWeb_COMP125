let imgFiles = [
  "images/burger1.jpg",
  "images/pizza.jpg",
  "images/fries.jpg",
  "images/nuggets.jpg",
  "images/milkshake.png",
  "images/poutine.jpg",
  "images/fish.jpg",
  "images/chickBurger.jpg",
];

let imgCaptions = new Array(12);
imgCaptions[0] = "Our Classic Burger";
imgCaptions[1] = "Our Classic Cheese Pizza";
imgCaptions[2] = "Our Famous Fries";
imgCaptions[3] = "Our Chicken Nuggets";
imgCaptions[4] = "Our Amazing Milkshake";
imgCaptions[5] = "Our Great Poutine";
imgCaptions[6] = "Our Classic Fish Burger";
imgCaptions[7] = "Our Classic Crispy Chicken Sandwich";

// Count of images in the slideshow
let imgCount = imgFiles.length;

let favorites = [];
let favoritesSource = [];

window.addEventListener("load", creatLightbox);

function creatLightbox() {
  //Lightbox Container
  let lightBox = document.getElementById("lightbox");
  //Parts of the lightbox
  let lbCounter = document.createElement("div");
  let lbPrev = document.createElement("div");
  let lbNext = document.createElement("div");
  let lbPlay = document.createElement("div");
  let lbImages = document.createElement("div");

  //Design the lightbox slide counter
  lightBox.appendChild(lbCounter);
  lbCounter.id = "lbCounter";
  let currentImg = 1;
  lbCounter.textContent = currentImg + " / " + imgCount;

  //Design the lightbox previous slide button
  lightBox.appendChild(lbPrev);
  lbPrev.id = "lbPrev";
  lbPrev.innerHTML = "&#9664";
  lbPrev.onclick = showPrev;

  //Design the lightbox next slide button
  lightBox.appendChild(lbNext);
  lbNext.id = "lbNext";
  lbNext.innerHTML = "&#9654;";
  lbNext.onclick = showNext;

  //Design the lightbox images container
  lightBox.appendChild(lbImages);
  lbImages.id = "lbImages";
  //Add images from the imgFiles array to the container
  for (let i = 0; i < imgCount; i++) {
    let image = document.createElement("img");
    image.src = imgFiles[i];
    image.alt = imgCaptions[i];
    image.onclick = createOverlay;
    lbImages.appendChild(image);
  }

  function showNext() {
    lbImages.appendChild(lbImages.firstElementChild);
    currentImg < imgCount ? currentImg++ : (currentImg = 1);
    lbCounter.textContent = currentImg + " / " + imgCount;
  }
  function showPrev() {
    lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
    currentImg > 1 ? currentImg-- : (currentImg = imgCount);
    lbCounter.textContent = currentImg + " / " + imgCount;
  }

  function createOverlay() {
    let overlay = document.createElement("div");
    overlay.id = "lbOverlay";
    //Add the figure box to the overlay
    let figureBox = document.createElement("figure");
    overlay.appendChild(figureBox);

    //add image to the figure box
    let overlayImage = this.cloneNode(true);
    figureBox.appendChild(overlayImage);

    //add caption to image
    let overlayCaption = document.createElement("figcaption");
    overlayCaption.textContent = overlayImage.alt;
    figureBox.appendChild(overlayCaption);

    let addToFavorites = document.createElement("button");
    addToFavorites.textContent = "Add to Favorites";
    addToFavorites.id = "addToFavorites";
    addToFavorites.onclick = function () {
      addFavorite(overlayImage);
      document.body.removeChild(overlay);
    };
    figureBox.appendChild(addToFavorites);

    //add a close button
    let closeButton = document.createElement("div");
    closeButton.id = "lbOverlayClose";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function () {
      document.body.removeChild(overlay);
    };
    overlay.appendChild(closeButton);

    document.body.appendChild(overlay);
  }

  function addFavorite(image) {
    favoritesContainer = document.getElementById("favorites");

    if (favorites.length >= 5) {
      window.alert("You can only add up to 5 favorites. Remove one first.");
      console.log("You can only add up to 5 favorites. Remove one first.");
      return;
    }

    if (favoritesSource.includes(image.src)) {
      window.alert("You have already added this item to favorites.");
      console.log("You have already added this image to favorites.");
      return;
    }

    let favoriteItem = document.createElement("div");
    favoriteItem.classList.add("favoriteItem");

    let favImage = document.createElement("img");
    favImage.src = image.src;
    favImage.alt = image.alt;
    favImage.onclick = function () {
      showRemoveButton(favoriteItem);
    };

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.style.display = "none";
    removeButton.onclick = function () {
      removeFavorite(favoriteItem);
    };

    favoriteItem.appendChild(favImage);
    favoriteItem.appendChild(removeButton);
    favoritesContainer.appendChild(favoriteItem);
    favorites.push(favoriteItem);
    favoritesSource.push(image.src);
    console.log(favorites.length);
    console.log(favorites);
  }

  function showRemoveButton(item) {
    let removeBtn = item.querySelector(".remove-btn");
    removeBtn.style.display = "block";
  }

  function removeFavorite(item) {
    item.remove();
    favorites = favorites.filter((fav) => fav !== item);
    favoritesSource = favoritesSource.filter((src) => src !== item.querySelector("img").src);
  }
}
