// Validação dos formulários dos poups ------------------------------------------------------------------
const showInputError = (inputElement, errorMessage) => {
  const errorElement =
    inputElement.parentElement.querySelector(".form__input-error");
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

export const hideInputError = (inputElement) => {
  const errorElement =
    inputElement.parentElement.querySelector(".form__input-error");
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__edit-button_inactive");
  } else {
    buttonElement.classList.remove("popup__edit-button_inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".popup__edit-button");
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(".form__set"));

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation();

export const resetForm = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((form) => {
    form.reset();
  });
};

export const resetFormHideError = () => {
  const formList = Array.from(document.querySelectorAll(".form__input-error"));
  formList.forEach((form) => {
    form.classList.remove("form__input-error_active");
    form.textContent = "";
  });
  const formInput = Array.from(document.querySelectorAll(".form__input"));
  formInput.forEach((input) => {
    input.classList.remove("form__input_type_error");
  });
};
