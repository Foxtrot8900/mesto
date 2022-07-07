export default class Popup {
  
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupCloseButton = this._popup.querySelector('.popup__container-closeicon-button');
  }

  
  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  
  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) this.close();
    });

    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });
  }
}
