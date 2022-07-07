export default class UserInfo {

  constructor({nameElement, jobElement, avatarElement}) {
    this._nameElement = nameElement;
    this._jobElement = jobElement;
    this._avatarElement = avatarElement;
  }

 
  fill({name, about, avatar, cohort, _id}) {
    this._name = name;
    this._job = about;
    this._avatar = avatar;
    this._cohort = cohort;
    this.id = _id;
  }

  
  getUserInfo() {
    return {
      name: this._name,
      job: this._job
    }
  }

 
  renderName() {
    this._nameElement.textContent = this._name;
  }

 
  renderJob() {
    this._jobElement.textContent = this._job;
  }

 
  renderAvatar() {
    this._avatarElement.src = this._avatar;
  }
}
