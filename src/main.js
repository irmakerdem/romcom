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
var savedCoversSection = document.querySelector(".saved-covers-section");
var inputImage = document.querySelector(".user-cover");
var inputTitle = document.querySelector(".user-title");
var inputDesc1 = document.querySelector(".user-desc1");
var inputDesc2 = document.querySelector(".user-desc2");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomizeBook);
randomCoverButton.addEventListener('click', randomizeBook);
makeCoverButton.addEventListener('click', displayForm);
viewSavedCoversButton.addEventListener('click', displaySavedCovers);
homeButton.addEventListener('click', displayHomePage);
makeMyBookButton.addEventListener('click', createNewCover);

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function displayForm() {
  show(viewForm);
  hide(homePage);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(homeButton);
  /// save cover page
};

function displaySavedCovers() {
  show(savedCoversSection);
  hide(homePage);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(homeButton);
  hide(viewForm);
  /// save cover page
};

function displayHomePage() {
  hide(homeButton);
  show(randomCoverButton);
  show(saveCoverButton);
  hide(viewForm);
  show(homePage);
  /// save cover page
};

function randomizeBook() {
  var newImage = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var newDescriptor2 = descriptors[getRandomIndex(descriptors)];
  makeCover(newImage, newTitle, newDescriptor1, newDescriptor2)
}

function makeCover(newImage, newTitle, newDescriptor1, newDescriptor2) {
  currentCover = new Cover(newImage, newTitle, newDescriptor1, newDescriptor2);
  coverImage.src = newImage;
  coverTitle.innerText = newTitle;
  tagLine1.innerText = newDescriptor1;
  tagLine2.innerText = newDescriptor2;
}

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
}

///clearing form?
