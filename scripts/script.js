const page = document.querySelector(".page");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__closebutton");
const editPopUp = document.querySelector(".popup");
const profileName = document.getElementById("name");
const profileAbout = document.getElementById("aboutme");
const popupName = document.querySelector(".popup__name");
const popupExplore = document.querySelector(".popup__explore");

const likeButtons = document.querySelectorAll(".element__like");
likeButtons.forEach((button) =>
  button.addEventListener("click", () =>
    button.classList.toggle("element__like_active")
  )
);

/*
likeButton.addEventListener("click", handleActiveLike);

function handleActiveLike() {
  likeButton.classList.toggle("element__like_active");
}
*/
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
