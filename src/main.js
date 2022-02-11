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
var viewForm = document.querySelector(".form-view");
var homePage = document.querySelector(".home-view");
var savedCoversSection = document.querySelector(".saved-covers-section");

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
  // show the form
  show(viewForm);
  // hide the homepage
  hide(homePage);
  // hide shownew random cover button
  hide(randomCoverButton);
  // hide save cover button
  hide(saveCoverButton);
  // show the home button
  show(homeButton);
  /// save cover page
};

function displaySavedCovers() {
  // show saved covers section
  show(savedCoversSection);
  // hide the homePage
  hide(homePage);
  // hide show new random cover button
  hide(randomCoverButton);
  // hide save cover button
  hide(saveCoverButton);
  // show home button
  show(homeButton);
  // hide view form
  hide(viewForm);
  /// save cover page
};

function displayHomePage() {
  // hide home buttons
  hide(homeButton);
  // show show new random cover button
  show(randomCoverButton);
  // show save cover button
  show(saveCoverButton);
  // hide viewForm
  hide(viewForm);
  // show homePage
  show(homePage);
  // save cover page
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
