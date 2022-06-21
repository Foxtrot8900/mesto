export const initialCards = [
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

  export const buttonEdit = document.querySelector('.profile__info-editbutton');
  export const profilePopup = document.querySelector('.popup-profile');
  export const cardPopup = document.querySelector('.popup-card');
  export const addButton = document.querySelector('.profile__addbutton');
  export const nameInput = profilePopup.querySelector('.popup__input_field_name');
  export const jobInput = profilePopup.querySelector('.popup__input_field_job');

  export const validationSettings = {
    formElement: '.popup__form-info',
    inputElement: '.popup__input',
    buttonElement: '.popup__container-button',
    inactiveButtonClass: 'popup__container-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    errorText:'.popup__input-error'
  }; 