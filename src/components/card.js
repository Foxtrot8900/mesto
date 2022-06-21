
export class Card {
  constructor({ name, link, handleCardClick }, cardSelector) {
      this._name = name;
      this._image  = link;
      this._handleCardClick = handleCardClick;
      this._cardSelector = cardSelector;
      this._card = this._getTemplate();
      this._like = this._card.querySelector('.element__rectangle-heartimg');
      this._delete = this._card.querySelector('.element__deleteicon-image');
  }
  _getTemplate() {
    const card = document.querySelector(this._cardSelector).content;
    const cardElement = card.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    
    const cardImage = this._card.querySelector('.element__rectangle-image');
    const cardName = this._card.querySelector('.element__rectangle-title');
    cardImage.src = this._image;
    cardImage.alt = this._name;
    cardName.textContent = this._name;
    this._setEventListeners();
    return this._card;
  }


  removeCard() {
    this._card.remove();
  }

  handleLikeClick() {
    this._like.classList.toggle('element__rectangle-heart_active');
  }
 
  _setEventListeners() {
    this._delete.addEventListener('click', () => {
      this.removeCard();
    });

    this._like.addEventListener('click', () => {
      this.handleLikeClick();
    });

    this._card.querySelector('.element__rectangle-image').addEventListener('click', () => {
      this._handleCardClick({
          name: this._name,
          link: this._link
      })
    })
}
}