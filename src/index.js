import './pages/index.css';
import { Card } from "./scripts/components/card.js";
import {FormValidator} from "./scripts/components/FormValidator.js";
import PopupWithImage from './scripts/components/PopupWithImage.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import {Section} from './scripts/components/section.js';
import {UserInfo} from './scripts/components/UserInfo.js';
import{
  buttonEdit,
  profilePopup,
  cardPopup,
  addButton,
  nameInput,
  jobInput,
  validationSettings,
  initialCards
} from './scripts/utils/constants.js'




const cardValidation = new FormValidator(validationSettings, cardPopup);
const profileValidation = new FormValidator(validationSettings, profilePopup);

const popupWithImage = new PopupWithImage('.popup-image');

const userInfo = new UserInfo({nameSelector:'.profile__info-title',
  descriptionSelector:'.profile__info-subtitle'});

const popupTypeCard = new PopupWithForm({ handleSubmit: (inputsValues) => {
    const card = createCard(inputsValues.caption, inputsValues.job, '.user');
    cardsList.addItem(card);
  }
}, '.popup-card');

// Cards function
function createCard(card_name, card_info, cardSelector) {
    const card = new Card({ name:card_name, link:card_info, handleCardClick: () => {
          popupWithImage.open(card_name, card_info)
        },
      },  cardSelector);
    const cardElement = card.generateCard();
    return cardElement;
}

const cardsList = new Section({ items: initialCards, renderer: (item) => {
      const card = createCard(item.name, item.link, '.user');
      cardsList.addItem(card);
    },
}, '.elements' );
 
cardsList.renderItems();

// popup Edit Form
const popupProfile = new PopupWithForm({
    handleSubmit:(inputsValues) => {
      userInfo.setUserInfo({
        name: inputsValues.nickname,
        description: inputsValues.job
      })
}}, '.popup-profile');

buttonEdit.addEventListener('click', () => {
    const userInformation = userInfo.getUserInfo();
    const userName = userInformation.name;
    const userDescription = userInformation.description;
    nameInput.value = userName;
    jobInput.value = userDescription;
    popupProfile.open();
})

// popup Card Form
addButton.addEventListener('click', () => {
  popupTypeCard.open();
});

popupWithImage.setEventListeners();
popupTypeCard.setEventListeners();
popupProfile.setEventListeners();
cardValidation.enableValidation();
profileValidation.enableValidation();