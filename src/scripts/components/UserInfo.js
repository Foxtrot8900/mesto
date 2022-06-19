export class UserInfo {
    constructor({ nameSelector, descriptionSelector }){
        this._name = document.querySelector(nameSelector);
        this._description = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            description: this._description.textContent
        };
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name;
        this._description.textContent = userInfo.description;
    }
}