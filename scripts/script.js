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

// Criação de cards iniciais -----------------------------------------------------------------------

const elements = document.querySelector(".elements");

function saveCard(card) {
  const template = document.querySelector("#template").content;
  const element = template.querySelector(".element").cloneNode(true);

  element.querySelector(".element__image").src = card.link;
  element.querySelector(".element__image").alt = card.name;
  element.querySelector(".element__place").textContent = card.name;

  elements.prepend(element);

  const likeButton = element.querySelector(".element__like");
  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("element__like_active")
  );

  const trash = element.querySelector(".element__trash");
  trash.addEventListener("click", () => trash.closest(".element").remove());

  const cardImage = element.querySelector(".element__image");
  cardImage.addEventListener("click", () => handleShowImagePopUp(card));
}

const modalImagePopUp = document.querySelector("#modal-image");

function handleShowImagePopUp(card) {
  const img = modalImagePopUp.querySelector(".popup__image");
  const imgPlace = modalImagePopUp.querySelector(".popup__place");

  img.src = card.link;
  img.alt = card.name;
  imgPlace.textContent = card.name;
  modalImagePopUp.classList.add("popup__img-opened");
}

function handleCloseImagePopUp() {
  modalImagePopUp.classList.remove("popup__img-opened");
}

const popupImageCloseButton = document.querySelector("#imagepopup_closebutton");
popupImageCloseButton.addEventListener("click", handleCloseImagePopUp);

initialCards.forEach((card) => saveCard(card));

//----------------------------------------------------------------------------------

const page = document.querySelector(".page");

// Classes do popup de edição  -----------------------------------------------------

const popupCloseButton = document.querySelector(".popup__closebutton");

// Abertura e fechamento de popup ---------------------------------------------------

const editButton = document.querySelector(".profile__edit-button");
const editPopUp = document.querySelector("#edit-popup");
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

// Salvar dados popup de edição   ---------------------------------------------------

const profileName = document.getElementById("name");
const profileAbout = document.getElementById("aboutme");
const popupName = document.querySelector("#fname");
const popupExplore = document.querySelector("#fexplore");

const formElement = document.querySelector(".popup__form");

function updateProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupExplore.value;
  handleClosePopUp();
}

formElement.addEventListener("submit", updateProfile);

// Abrir e fechar popup de adição de lugar ------------------------------------------------------------------
const addPopUp = document.querySelector("#add-popup");

const addButton = document.querySelector(".profile__add-button");
const popupAddCloseButton = document.querySelector("#addpopup_closebutton");

addButton.addEventListener("click", handleShowAddPopUp);

function handleShowAddPopUp() {
  addPopUp.classList.add("popup_opened");
}

popupAddCloseButton.addEventListener("click", handleCloseAddPopUp);

function handleCloseAddPopUp() {
  addPopUp.classList.remove("popup_opened");
}

//Adicionar card --------------------------------------------------------

const popupTitle = document.querySelector("#ftitle");
const popupLink = document.querySelector("#flink");

const addElement = document.querySelector("#addpopup_form");

function addCard(evt) {
  evt.preventDefault();

  const card = { link: popupLink.value, name: popupTitle.value };
  saveCard(card);

  handleCloseAddPopUp();
}

addElement.addEventListener("submit", addCard);
