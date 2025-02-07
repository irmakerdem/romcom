// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");

var randomCoverButton = document.querySelector(".random-cover-button");
var makeCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button")
var makeMyBookButton = document.querySelector(".create-new-book-button");

var viewForm = document.querySelector(".form-view");
var homePage = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var savedCoversSection = document.querySelector(".saved-covers-section");

var inputImage = document.querySelector(".user-cover");
var inputTitle = document.querySelector(".user-title");
var inputDesc1 = document.querySelector(".user-desc1");
var inputDesc2 = document.querySelector(".user-desc2");

// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomizeBook);
randomCoverButton.addEventListener('click', randomizeBook);
makeCoverButton.addEventListener('click', displayForm);
homeButton.addEventListener('click', displayHomePage);
makeMyBookButton.addEventListener('click', createNewCover);
saveCoverButton.addEventListener('click', saveCover);
viewSavedCoversButton.addEventListener('click', viewSavedCovers);

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function displayForm() {
  show(viewForm);
  hide(homePage);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(homeButton);
  hide(savedCoversSection);
  hide(savedView);
};

function displaySavedCovers() {
  show(savedCoversSection);
  hide(homePage);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(homeButton);
  hide(viewForm);
  show(savedView);
};

function displayHomePage() {
  hide(homeButton);
  show(randomCoverButton);
  show(saveCoverButton);
  hide(viewForm);
  show(homePage);
  hide(savedCoversSection);
};

function randomizeBook() {
  var newImage = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var newDescriptor2 = descriptors[getRandomIndex(descriptors)];

  if (newDescriptor1 === newDescriptor2) {
    newDescriptor2 = descriptors[getRandomIndex(descriptors)]
  };

  makeCover(newImage, newTitle, newDescriptor1, newDescriptor2)
};

function makeCover(newImage, newTitle, newDescriptor1, newDescriptor2) {
  currentCover = new Cover(newImage, newTitle, newDescriptor1, newDescriptor2);
  coverImage.src = newImage;
  coverTitle.innerText = newTitle;
  tagLine1.innerText = newDescriptor1;
  tagLine2.innerText = newDescriptor2;
};

function createNewCover() {
  event.preventDefault();
  var newImage = inputImage.value;
  var newTitle = inputTitle.value;
  var newDescriptor1 = inputDesc1.value;
  var newDescriptor2 = inputDesc2.value;
  covers.push(newImage);
  titles.push(newTitle);
  descriptors.push(newDescriptor1);
  descriptors.push(newDescriptor2);
  makeCover(newImage, newTitle, newDescriptor1, newDescriptor2);
  displayHomePage();
  clearForm();
};

function clearForm() {
  inputImage.value = "";
  inputTitle.value = "";
  inputDesc1.value = "";
  inputDesc2.value = "";
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover);
  }
};

function viewSavedCovers() {
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
    <section class="mini-cover" id="${savedCovers[i].id}" onDblClick="deleteSavedCover(this.id)">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`
 }
  displaySavedCovers()
};

function deleteSavedCover(id) {
  for (var i = 0; i < savedCovers.length; i++) {
    if (+id === savedCovers[i].id) {
      savedCovers.splice(i, 1);
      viewSavedCovers();
    }
  }
};
