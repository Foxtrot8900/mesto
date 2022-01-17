let buttonedit = document.querySelector('.profile__info-editbutton');
let pop = document.querySelector('.popup');
let closebutton = document.querySelector('.popup__container-closeicon');
let savebutton = document.querySelector('.popup__container-button');
let formelement = document.querySelector('form');
let nameinput = document.querySelector('.popup__container-fieldname');
let jobinput = document.querySelector('.popup__container-fieldjob');
function openpopup() {
    pop.setAttribute('style','display:block');
}
function closepopup() {
    pop.removeAttribute('style','display:block');
}
function formsubmitHandler (evt){
    evt.preventDefault();
    let namevalue = nameinput.value;
    let jobvalue = jobinput.value;
    let name = document.querySelector('.profile__info-title');
    let job = document.querySelector('.profile__info-subtitle');
    name.textContent=namevalue;
    job.textContent=jobvalue;
}
buttonedit.addEventListener('click',openpopup);
closebutton.addEventListener('click',closepopup);
formelement.addEventListener('submit',formsubmitHandler);
savebutton.addEventListener('click',closepopup);
