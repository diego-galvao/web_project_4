let page = document.querySelector(".page");
let editButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__closebutton");
let editPopUp = document.querySelector(".popup");
let profileName = document.getElementById("name");
let profileAbout = document.getElementById("aboutme");
let popupName = document.querySelector(".popup__name");
let popupExplore = document.querySelector(".popup__explore");

editButton.addEventListener("click", handleShowPopUp);

function handleShowPopUp() {
  editPopUp.classList.add("popup_opened");
  popupName.value = profileName.textContent;
  popupExplore.value = profileAbout.textContent;
}

popupCloseButton.addEventListener("click", handleClosePopUp);

function handleClosePopUp() {
  editPopUp.classList.remove("popup_opened");
}

let formElement = document.querySelector(".popup__form");

function updateProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupExplore.value;
  handleClosePopUp();
}

formElement.addEventListener("submit", updateProfile);
