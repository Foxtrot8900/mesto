import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(popupSelector, handleSubmit, handleOpenForm) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__container-form');
    this._inputValues = {};
    this._handleOpenForm = handleOpenForm;
    this.formName = this._form.getAttribute('name');
    this._allInputs = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__container-button');
    this._originalButtonText = this._submitButton.textContent;
  }

  
  _getInputValues() {
    this._allInputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit();
    });
  }

  
  _submit() {
    this._handleSubmit(this._getInputValues());
  }

  
  blockSubmitButton(blockedButtonText = 'Сохранение...') {
    this._blockedButtonText = blockedButtonText;
    this._submitButton.disabled = true;
    this._submitButton.textContent = this._blockedButtonText;
  }

  
  unblockSubmitButton() {
    this._submitButton.disabled = false;
    this._submitButton.textContent = this._originalButtonText;
  }

  
  close() {
    super.close();
    this._form.reset();
  }

  open() {
    super.open();
    this._handleOpenForm();
  }
}
