import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  
  constructor(popupSelector) {
    super(popupSelector);
    this._figureElement = this._popup.querySelector('.popup-image__picture');
    this._captionElement = this._popup.querySelector('.popup-image__title');
  }

  open(imageLink, text) {
    this._figureElement.src = imageLink;
    this._figureElement.alt = text;
    this._captionElement.textContent = text;
    super.open();
  }
}
