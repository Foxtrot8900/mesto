export class FormValidator {
    constructor(validationSettings, formElement) {
      this._validationSettings = validationSettings;
      this._formElement = formElement;
      this._submitButtonElement = this._formElement.querySelector(this._validationSettings.buttonElement);
      this._errorFields = this._formElement.querySelectorAll(this._validationSettings.errorText);
      this._inputs = this._formElement.querySelectorAll(this._validationSettings.inputElement);
    }
  
    _getErrorElement(formElement, inputElement) {
      return formElement.querySelector(`.${inputElement.id}-error`);
    }
  
    _showError(formElement, inputElement, errorMessage, errorClass, inputErrorClass) {
      const errorElement = this._getErrorElement(formElement, inputElement);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(errorClass);
      inputElement.classList.add(inputErrorClass);
    }
  
    _hideError(formElement, inputElement, errorClass, inputErrorClass) {
      const errorElement = this._getErrorElement(formElement, inputElement);
      errorElement.textContent = '';
      errorElement.classList.remove(errorClass);
      inputElement.classList.remove(inputErrorClass);
    }
  
    _checkValidity(formElement, inputElement, errorClass, inputErrorClass) {
      const isInputNotValid = !inputElement.validity.valid;
      if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        this._showError(formElement, inputElement, errorMessage, errorClass, inputErrorClass);
      } else {
        this._hideError(formElement, inputElement, errorClass, inputErrorClass);
      }

    }
  
    _toggleButtonState(inputList, submitButtonElement, inactiveButtonClass) {
      const hasInvalidInput = inputList.some((inputElement) => !inputElement.validity.valid);
  
      if (hasInvalidInput) {
       
        submitButtonElement.classList.add(inactiveButtonClass);
        submitButtonElement.setAttribute('disabled', true);
        
      } else {
        
        submitButtonElement.classList.remove(inactiveButtonClass);
        submitButtonElement.removeAttribute('disabled');
      }
    }
  
    _setEventListeners(formElement, validationObj) {
      const { inputElement,
        buttonElement,
        inactiveButtonClass,
        inputErrorClass,
        errorClass } = validationObj;
      const inputList = Array.from(formElement.querySelectorAll(inputElement));
      const submitButtonElement = formElement.querySelector(buttonElement);
      const inputListIterator = (inputElement) => {
        const handleInput = () => {
          this._checkValidity(formElement, inputElement, errorClass, inputErrorClass);
          this._toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);
        };
  
        inputElement.addEventListener('input', handleInput);
      };
      this._toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);
      inputList.forEach(inputListIterator);
    }
  
    enableValidation() {
      
      this._setEventListeners(this._formElement, this._validationSettings);
    }
  
    _setDisabledOnSubmitButton() {
      this._submitButtonElement.classList.add(this._validationSettings.inactiveButtonClass);
      this._submitButtonElement.disabled = true;
    };
  
    resetPopupForm() {
      this._errorFields.forEach((field) => field.textContent = '');
      this._inputs.forEach((input) => input.classList.remove(this._validationSettings.inputErrorClass));
      this._setDisabledOnSubmitButton();
    };

  }
  