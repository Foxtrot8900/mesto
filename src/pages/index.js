
import {
  cardsSelector,
  cardTemplateSelector,
  formSelectors, 
  profileElements, 
  profileEditButton,
  profileNameInput,
  profileJobInput,
  profileEditPopupSelector,
  avatarChangeButton,
  avatarChangePopupSelector,
  newCardButton,
  newCardForm,
  newCardPopupSelector,
  imagePopupSelector,
  confirmationPopupSelector,
} from '../utils/constants.js';

import {apiConfig} from '../utils/apiConfig.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css'; 



const formValidators = {}; 
const cards = {}; 



function validateForms (formSelectors) {
  const formElements = Array.from(document.querySelectorAll(formSelectors.formSelector));
  formElements.forEach(formElement => {
    const form = new FormValidator(formSelectors, formElement);
    formValidators[formElement.getAttribute('name')] = form;
    form.enableValidation();
  });
}


function renderCard(data) {
  const card = new Card(data, cardTemplateSelector, handleCardClick, handleDeleteCard, handleLikeCard, userInfo.id);
  cards[data._id] = card;
  return card.generateCard();
}


function handleCardClick(imageLink, text) {
  imagePopup.open(imageLink, text);
}


function handleDeleteCard(cardId) {
  popupWithConfirmation.setTarget(cardId);
  popupWithConfirmation.open();
}


function handleLikeCard(cardId, isLiked) {
  cards[cardId].blockLikeButton();

  api.toggleLike(cardId, isLiked)
    .then(likes => {
      cards[cardId].setLikes(likes);
    })
    .catch(err => console.error(err))
    .finally(() => {
      cards[cardId].unblockLikeButton();
    });
}


function handleOpenForm() {
  formValidators[this.formName].hideErrors();
  formValidators[this.formName].disableButtonState();
}



const api = new Api(apiConfig);

const userInfo = new UserInfo({
  nameElement: profileElements.name,
  jobElement: profileElements.job,
  avatarElement: profileElements.avatar
});


const cardsSection = new Section(renderCard, cardsSelector);


const profileEditPopup = new PopupWithForm(profileEditPopupSelector, data => {
  profileEditPopup.blockSubmitButton();

  api.setUserInfo(data)
    .then(res => {
      userInfo.fill(res);
      userInfo.renderName();
      userInfo.renderJob();
      profileEditPopup.close();
    })
    .catch(err => console.error(err))
    .finally(() => {
      profileEditPopup.unblockSubmitButton();
    });
}, handleOpenForm);

const avatarChangePopup = new PopupWithForm(avatarChangePopupSelector, data => {
  avatarChangePopup.blockSubmitButton();

  api.changeAvatar(data.link)
    .then((res) => {
      userInfo.fill(res);
      userInfo.renderAvatar();
      avatarChangePopup.close();
    })
    .catch(err => console.error(err))
    .finally(() => {
      avatarChangePopup.unblockSubmitButton();
    });
}, handleOpenForm);

const newCardPopup = new PopupWithForm(newCardPopupSelector, data => {
  newCardPopup.blockSubmitButton();

  api.addNewCard(data)
    .then(res => {
      cardsSection.addItem(renderCard(res), true);
      newCardPopup.close();
    })
    .catch(err => console.error(err))
    .finally(() => {
      newCardPopup.unblockSubmitButton();
    });
}, handleOpenForm);

const imagePopup = new PopupWithImage(imagePopupSelector);

const popupWithConfirmation = new PopupWithConfirmation(confirmationPopupSelector, (cardId) => {
  api.deleteCard(cardId)
    .then(() => {
      cards[cardId].delete();
      popupWithConfirmation.close();
    })
    .catch(err => console.error(err));
});



Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(results => {
    userInfo.fill(results[0]);
    userInfo.renderName();
    userInfo.renderJob();
    userInfo.renderAvatar();

    cardsSection.renderItems(results[1]);
  })
  .catch(err => console.error(err));



profileEditPopup.setEventListeners();

profileEditButton.addEventListener('click', function () {
  ({
    name: profileNameInput.value,
    job: profileJobInput.value
  } = userInfo.getUserInfo());
  profileEditPopup.open();
  profileNameInput.dispatchEvent(new Event('input'));
  profileJobInput.dispatchEvent(new Event('input'));
});


avatarChangePopup.setEventListeners();

avatarChangeButton.addEventListener('click', () => {
  avatarChangePopup.open();
});


newCardPopup.setEventListeners();

newCardButton.addEventListener('click', function () {
  newCardPopup.open();
});


popupWithConfirmation.setEventListeners();


imagePopup.setEventListeners();



validateForms(formSelectors);
