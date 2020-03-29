import {Selector, t} from 'testcafe';

export default class InstagramPage {
    constructor() {
        this.inputUsername = Selector('input').withAttribute('name','username');
        this.inputPassword = Selector('input').withAttribute('name','password');
        this.buttonLogin = Selector('button').withAttribute('class','sqdOP  L3NKy   y3zKF     ');
        this.inputSearch = Selector('input').withAttribute('class','XTCLo x3qfX ');
        this.aMyProfile = Selector('a').withAttribute('href','/dummyaccount411/');
        this.aProfile = Selector('a').withAttribute('href','/luiscormor/');
        this.buttonFollow = Selector('button').withAttribute('class','BY3EC  sqdOP  L3NKy   y3zKF     ');
        this.buttonUnfollow = Selector('button').withAttribute('class','BY3EC  sqdOP  L3NKy    _8A5w5    ');
    }
}
