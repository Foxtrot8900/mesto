
  enableValidation({
    formElement: '.popup__form-info',
    inputElement: '.popup__input',
    buttonElement: '.popup__container-button',
    inactiveButtonClass: 'popup__container-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }); 

  function showInputError(formElement, inputElement, errorMessage, arr) { 
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(arr.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(arr.errorClass);
  }


  function hideInputError(formElement, inputElement, arr) { 
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove(arr.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(arr.errorClass);
  }


  function isValid(formElement, inputElement, arr) {        
    if (!inputElement.validity.valid) {              
      showInputError(formElement, inputElement ,inputElement.validationMessage, arr);
    } else {
      hideInputError(formElement, inputElement, arr);
    }
  }


  function setEventListener(formElement, arr) {               
    const inputList = Array.from(formElement.querySelectorAll(arr.inputElement));
    const buttonElement = formElement.querySelector(arr.buttonElement);
    toggleButtonState(inputList, buttonElement, arr);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, arr);
        toggleButtonState(inputList, buttonElement, arr);
      });
    });
  }

  function enableValidation(arr) {                          
    const formList = Array.from(document.querySelectorAll(arr.formElement));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListener(formElement, arr);
    });
  }

  function hasInvalidInput(inputList) {                  
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  function toggleButtonState(inputList, buttonElement, arr) {  
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(arr.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(arr.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

