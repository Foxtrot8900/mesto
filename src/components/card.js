export default class Card {
  constructor (
    {name, link, likes, owner, createdAt, _id},
    templateSelector,
    handleCardClick,
    handleDeleteCard,
    handleLikeCard,
    userId) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._owner = owner;
    this._createdAt = createdAt;
    this._id = _id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._isLiked = this._checkIsLiked();
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.element__rectangle-heartimg');
    this._likeCount = this._element.querySelector('.element__rectangle-count');
    this._deleteIcon = this._element.querySelector('.element__deleteicon-image');
  }
 
  _getTemplate () {
    const cardTemplate = document
                      .querySelector(this._templateSelector)
                      .content
                      .querySelector('.element')
                      .cloneNode(true);
    return cardTemplate;
  }

  
  generateCard() {
    const image = this._element.querySelector('.element__rectangle-image');
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector('.element__rectangle-title').textContent = this._name;
    this.setLikes();
    if (this._owner._id !== this._userId) {
      this._deleteIcon.remove();
    }
    this._setEventlisteners();
    return this._element;
   
  }

 
  _setEventlisteners() {
    this._likeButton.addEventListener('click', () => this._likeCard());
    this._element.querySelector('.element__rectangle-image').addEventListener('click', () => this._handleCardClick(this._link, this._name));
    if (this._deleteIcon) {
        this._deleteIcon.addEventListener('click', () => this._handleDelete());
      }
  }

 
  _likeCard() {
    this._handleLikeCard(this._id, this._isLiked)
  }

  
  blockLikeButton() {
    this._likeButton.disabled = true;
  }

  
  unblockLikeButton() {
    this._likeButton.disabled = false;
  }

 
   _handleDelete() {
      this._handleDeleteCard(this._id);
  }

  
  _checkIsLiked() {
      return this._likes.some(person => person._id === this._userId);
  }

  setLikes(likes) {
    if (likes) {
      this._likes = likes;
      this._isLiked = this._checkIsLiked();
    }

    this._likeCount.textContent = this._likes.length;

    if (this._isLiked) {
      this._likeButton.classList.add('element__rectangle-heart_active');
    } else {
      this._likeButton.classList.remove('element__rectangle-heart_active');
    }
  }

  delete () {
    this._element.remove();
    this._element = null;
  }
}
