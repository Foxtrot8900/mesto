const buttonedit = document.querySelector('.profile__info-editbutton');
const pop = document.querySelector('.popup');
const closebutton = document.querySelector('.popup__container-closeicon');
const formelement = document.querySelector('.popup__container-form');
const nameinput = document.querySelector('.popup__input_field_name');
const jobinput = document.querySelector('.popup__input_field_job');
const name = document.querySelector('.profile__info-title');
const job = document.querySelector('.profile__info-subtitle');
const addbtn = document.querySelector('.profile__addbutton');
const closeoverlay = document.querySelector('.popupimg__closeicon');
const popimg = document.querySelector('.element__rectangle-image');
let overlay = document.querySelector('.popupimg');
const elements = document.querySelector('.elements');
const popCopy = document.querySelector('.popupcopy');
const closebuttonCopy = document.querySelector('.popupcopy__container-closeicon');
const buttonCopy = document.querySelector('.popupcopy__container-button');
const formelementCopy = document.querySelector('.popupcopy__container-form');
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

function openpopup() {
    pop.classList.add('popup_active');
    name.textContent=nameinput.value;
    job.textContent=jobinput.value;
}

function closepopup() {
    pop.classList.remove('popup_active');
}

function formsubmitHandler (evt){
    evt.preventDefault();
    let namevalue = nameinput.value;
    let jobvalue = jobinput.value;
    name.textContent=namevalue;
    job.textContent=jobvalue;
    closepopup();
}

buttonedit.addEventListener('click',openpopup);
closebutton.addEventListener('click',closepopup);
formelement.addEventListener('submit',formsubmitHandler);

function addOnLoad (obj) {
  const template = document.querySelector('#user').content;
  const templateElement = template.querySelector('.element').cloneNode(true);
  templateElement.querySelector('.element__rectangle-title').textContent=obj.name;
  templateElement.querySelector('.element__rectangle-image').src=obj.link;
  elements.append(templateElement);
}

for (let i=0; i<= initialCards.length - 1;i++){
 window.onload = addOnLoad(initialCards[i]);
}

function openAddbtn() {
  popCopy.classList.add('popupcopy_active');
}
addbtn.addEventListener('click',openAddbtn);

function closepopupCopy() {
  popCopy.classList.remove('popupcopy_active');
}
closebuttonCopy.addEventListener('click',closepopupCopy);
 
function submitAddCard(evt){
  evt.preventDefault();
  let template = document.querySelector('#user').content;
  let templateElement = template.querySelector('.element').cloneNode(true);
  let nameCopy = document.querySelector('.popupcopy__input_field_name').value;
  let linkCopy = document.querySelector('.popupcopy__input_field_job').value;
  templateElement.querySelector('.element__rectangle-title').textContent=nameCopy;
  templateElement.querySelector('.element__rectangle-image').src=linkCopy;
  closepopupCopy();
  return elements.prepend(templateElement);
}
formelementCopy.addEventListener('submit',submitAddCard);

function like(evt){
  evt.preventDefault();
  const evtTarget=evt.target;
  if(evtTarget.classList.contains('element__rectangle-heartimg') === true){
  if(evtTarget.classList.contains('element__rectangle-heart_active') === true){
       evtTarget.classList.remove('element__rectangle-heart_active');
     }
      else{
     evtTarget.classList.add('element__rectangle-heart_active');
     }
    }
  if(evtTarget.classList.contains('element__deleteicon-image')===true){
    (evtTarget.parentElement).parentElement.remove();
  }
  }
elements.addEventListener('click',like);

function openimage(evt){
  evt.preventDefault();
  const evtTarget=evt.target;
  if(evtTarget.classList.contains('element__rectangle-image')=== true){
    let picture = evtTarget.src;
    let Caption = evtTarget.nextElementSibling.textContent;
    let picturePlace = document.querySelector('.popupimg__image');
    picturePlace.src = picture;
    let CaptionPlace = document.querySelector('.popupimg__title');
    CaptionPlace.textContent = Caption;
    overlay.classList.add('popupimg_active');
  }
  }
  elements.addEventListener('click',openimage);

  function closeOverlay (){
    overlay.classList.remove('popupimg_active');
  }
  closeoverlay.addEventListener('click',closeOverlay);