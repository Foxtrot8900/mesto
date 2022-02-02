let buttonedit = document.querySelector('.profile__info-editbutton');
let pop = document.querySelector('.popup');
let closebutton = document.querySelector('.popup__container-closeicon');
let formelement = document.querySelector('form');
let nameinput = document.querySelector('.popup__input_field_name');
let jobinput = document.querySelector('.popup__input_field_job');
let name = document.querySelector('.profile__info-title');
let job = document.querySelector('.profile__info-subtitle');
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
