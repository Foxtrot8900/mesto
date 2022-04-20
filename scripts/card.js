import {openImage} from "./index.js";

export class Card{

  _captionPlace = document.querySelector('.popup-image__title');
  constructor(data,selector) {
    this._selector=selector;
    this._name=data.name;
    this._link=data.link;
  }


  _getTemplate() {
     const cardElement = this._selector
     .querySelector('.element')
     .cloneNode(true)
     return cardElement
     
  }

  generateCard(){
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.element__rectangle-image');
    this._setEventListeners();
    this._card.querySelector('.element__rectangle-title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._card;
  }


  _setEventListeners(){
    this._card.querySelector('.element__rectangle-heartimg').addEventListener('click', (evt) =>{
      evt.target.classList.toggle('element__rectangle-heart_active');
    });

    this._card.querySelector('.element__deleteicon-image').addEventListener('click', () =>{
      this._card.remove();
    });

    this._cardImage.addEventListener('click',() =>{
      openImage(this._link, this._name);
    })
  }
}