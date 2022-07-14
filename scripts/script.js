const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const elements = document.querySelector(".elements");

function createCard(card) {
  const template = document.querySelector("template").content;
  const element = template.querySelector(".element").cloneNode(true);

  element.querySelector(".element__image").src = card.link;
  element.querySelector(".element__place").textContent = card.name;

  elements.append(element);
}

initialCards.forEach((card) => createCard(card));

//----------------------------------------------------------------------------------

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
