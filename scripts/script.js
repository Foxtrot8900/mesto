let buttonedit = document.querySelector('.profile__info-editbutton');
let pop = document.querySelector('.popup');
let closebutton = document.querySelector('.popup__container-closeicon');
let formelement = document.querySelector('form');
let nameinput = document.querySelector('.popup__input_field_name');
let jobinput = document.querySelector('.popup__input_field_job');
function openpopup() {
    pop.classList.add('popup__container_active');
}
function closepopup() {
    pop.classList.remove('popup__container_active');
}
function formsubmitHandler (evt){
    evt.preventDefault();
    let namevalue = nameinput.value;
    let jobvalue = jobinput.value;
    let name = document.querySelector('.profile__info-title');
    let job = document.querySelector('.profile__info-subtitle');
    name.textContent=namevalue;
    job.textContent=jobvalue;
    closepopup();
}
buttonedit.addEventListener('click',openpopup);
closebutton.addEventListener('click',closepopup);
formelement.addEventListener('submit',formsubmitHandler);
