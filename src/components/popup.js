export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._closeButton = this._popupElement.querySelector('.popup__container-closeicon-button');
        this._closePopupESCEvent = this._closePopupESCEvent.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_active');
        document.addEventListener('keydown', this._closePopupESCEvent);
    }
    
    close() {
        this._popupElement.classList.remove('popup_active');
        document.removeEventListener('keydown', this._closePopupESCEvent);
    }

    _closePopupESCEvent(evt) {
        if (evt.key === 'Escape'){
            this.close();
        }
    }
    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_active')) {
        this.close();
      }}

    setEventListeners() {
        this._closeButton.addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click',this._handleOverlayClose);
    }
}