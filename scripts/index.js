import { Card } from "./card.js";
import {FormValidator} from "./FormValidator.js";
import { initialCards } from "./utils.js";
const buttonEdit = document.querySelector('.profile__info-editbutton');
const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-card');
const addButton = document.querySelector('.profile__addbutton');
const nameInput = profilePopup.querySelector('.popup__input_field_name');
const jobInput = profilePopup.querySelector('.popup__input_field_job');
const cardName = cardPopup.querySelector('.popup__input_caption');
const cardImage = cardPopup.querySelector('.popup__input_link');
const name = document.querySelector('.profile__info-title');
const job = document.querySelector('.profile__info-subtitle');
const profileForm = profilePopup.querySelector('.popup__container-form');
const profileCloseButton = profilePopup.querySelector('.popup__container-closeicon');
const cardCloseButton = cardPopup.querySelector('.popup__container-closeicon');
const elements= document.querySelector('.elements');
const formElementCopy = cardPopup.querySelector('.popup__container-form');
const overlayPopup = document.querySelector('.popup-image');
const overlayCloseIcon = overlayPopup.querySelector('.popup__container-closeicon');
const popupList = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup-image__picture');
const popupCaption = document.querySelector('.popup-image__title');
const selector = document.querySelector('#user').content;
const validationSettings = {
  formElement: '.popup__form-info',
  inputElement: '.popup__input',
  buttonElement: '.popup__container-button',
  inactiveButtonClass: 'popup__container-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  errorText:'.popup__input-error'
}; 
const cardValidation = new FormValidator(validationSettings, cardPopup);
const profileValidation = new FormValidator(validationSettings, profilePopup);



buttonEdit.addEventListener('click', function(){
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(profilePopup);});
addButton.addEventListener('click', function(){openPopup(cardPopup);});


function openPopup(popup){
  popup.classList.add('popup_active');
  document.addEventListener('keydown',closeByKey);
  document.addEventListener('click',closeByOverlayClick);
  
  profileValidation.resetPopupForm();
}

function closePopup(popup){
   popup.classList.remove('popup_active');
   document.removeEventListener('keydown',closeByKey);
   document.removeEventListener('click',closeByOverlayClick);
 }


profileCloseButton.addEventListener('click',function(){closePopup(profilePopup)});
cardCloseButton.addEventListener('click',function(){closePopup(cardPopup);});


function handleProfileFormSubmit (evt){
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  if (nameValue !== name.textContent) {
    name.textContent = nameValue;
  }
  if (jobValue !== job.textContent) {
    job.textContent = jobValue;
  }
  closePopup(profilePopup);
}

profileForm.addEventListener('submit',handleProfileFormSubmit);

function createCard(data) {
  
  const card = new Card (data, selector);
  const cardElement = card.generateCard();
  return cardElement;
}

function renderCard(data) {
  elements.prepend(createCard(data));
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
  cardValidation.resetPopupForm();
  closePopup(cardPopup);
  formElementCopy.reset();

}
overlayCloseIcon.addEventListener('click',function(){closePopup(overlayPopup);});
formElementCopy.addEventListener('submit',submitAddCard);

export function openImage(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openPopup(overlayPopup);
}

function closeByKey(evt){
  if(evt.code === 'Escape'){
    const popupOpened = document.querySelector('.popup_active');
    closePopup(popupOpened);
  }
}

function closeByOverlayClick(evt){
  if (evt.target.classList.contains('popup_active')){
   closePopup(evt.target);
  }
}




cardValidation.enableValidation();
profileValidation.enableValidation();
initialCards.forEach(data => renderCard(data));