export const cardsSelector = '.elements';
export const cardTemplateSelector = '#user';

const formSelector = '.popup__container-form';
const inputSelector = '.popup__input';
const submitButtonSelector = '.popup__container-button';
const inactiveButtonClass = 'popup__container-button_disabled';
const inputErrorClass = 'popup__input_type_error';
const errorClass = 'popup__input-error_active';
export const formSelectors = {
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
};



const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
const profileAvatar = document.querySelector('.profile__avatar-image');
export const profileElements = {
  name: profileName,
  job: profileJob,
  avatar: profileAvatar
}



export const profileEditButton = document.querySelector('.profile__info-editbutton');
export const profileEditPopupSelector = '.popup-profile';
const profileEditPopupElement = document.querySelector(profileEditPopupSelector);
export const profileNameInput = profileEditPopupElement.querySelector('.popup__input_field_name');
export const profileJobInput = profileEditPopupElement.querySelector('.popup__input_field_job');


export const avatarChangeButton = document.querySelector('.profile__avatar-button');
export const avatarChangePopupSelector = '.popup-avatar';


export const newCardButton = document.querySelector('.profile__addbutton');
export const newCardPopupSelector = '.popup-card';
const newCardPopupElement = document.querySelector(newCardPopupSelector);
export const newCardForm = newCardPopupElement.querySelector(formSelector);

 
export const imagePopupSelector = '.popup-image';

export const confirmationPopupSelector = '.popup-confirm';

