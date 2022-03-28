const buttonEdit = document.querySelector('.profile__info-editbutton');
const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popupcopy');
const addButton = document.querySelector('.profile__addbutton');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const cardName = document.querySelector('.popupcopy__input_field_name');
const cardImage = document.querySelector('.popupcopy__input_field_job');
const name = document.querySelector('.profile__info-title');
const job = document.querySelector('.profile__info-subtitle');
const profileForm = document.querySelector('.popup__container-form');
const profileCloseButton = document.querySelector('.popup__container-closeicon');
const cardCloseButton = document.querySelector('.popupcopy__container-closeicon');
const elements= document.querySelector('.elements');
const formElementCopy = document.querySelector('.popupcopy__container-form');
const overlayPopup = document.querySelector('.popupimg');
const overlayCloseIcon = document.querySelector('.popupimg__closeicon');
const picturePlace = document.querySelector('.popupimg__image');
const captionPlace = document.querySelector('.popupimg__title');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 



function openPopup(popup){
  popup.classList.add('popup_active');
}

buttonEdit.addEventListener('click', function(){openPopup(profilePopup);});
addButton.addEventListener('click', function(){openPopup(cardPopup);});

function closePopup(popup){
  popup.classList.remove('popup_active');
}

profileCloseButton.addEventListener('click',function(){closePopup(profilePopup);});
cardCloseButton.addEventListener('click',function(){closePopup(cardPopup);});

function handleProfileFormSubmit (evt){
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  name.textContent=nameValue;
  job.textContent=jobValue;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit',handleProfileFormSubmit);

function createCard(item){
  const card = document.querySelector('#user').content;
  const cardElement = card.querySelector('.element').cloneNode(true);
  const heart = cardElement.querySelector('.element__rectangle-heartimg');
  const deleteIcon = cardElement.querySelector('.element__deleteicon-image');
  const overlayImage = cardElement.querySelector('.element__rectangle-image');
  cardElement.querySelector('.element__rectangle-title').textContent=item.name;
  overlayImage.src=item.link;
  overlayImage.alt=item.name

  function like(){
    heart.classList.toggle('element__rectangle-heart_active');
  }
  heart.addEventListener('click',like);

  function deleteCard(){
       cardElement.remove();
  }

  deleteIcon.addEventListener('click',deleteCard);

 function openImage(){
    picturePlace.src = item.link;
    picturePlace.alt = item.name;
    captionPlace.textContent = item.name
    openPopup(overlayPopup);
  }

  overlayImage.addEventListener('click',openImage);
  return cardElement;
}

function addOnLoad (obj){
  const templateElement = createCard(obj);
  elements.append(templateElement);
}

for (let i=0; i<= initialCards.length - 1;i++){
  addOnLoad(initialCards[i]);
}

function submitAddCard(evt){
  evt.preventDefault();
  const addedCard =
    {
      name : cardName.value,
      link : cardImage.value
    };

  const templateElement = createCard(addedCard);
  elements.prepend(templateElement);
  closePopup(cardPopup);
  formElementCopy.reset();

}
overlayCloseIcon.addEventListener('click',function(){closePopup(overlayPopup);});
formElementCopy.addEventListener('submit',submitAddCard);