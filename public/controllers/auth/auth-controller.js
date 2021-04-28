var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import firebase from 'firebase';
import './auth-controller-css';
import '../../components/page-display/page-display';
import '../../components/content-wrapper/content-wrapper';
//elements
let AuthController = class AuthController extends LitElement {
    constructor() {
        super(...arguments);
        this.loggedIn = (state) => {
            let event = new CustomEvent('login-change', {
                detail: {
                    data: state,
                    message: 'Something important happened'
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);
        };
        this.handleGoogleLogin = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
                .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() => {
                firebase.auth()
                    .signInWithPopup(provider)
                    .then(result => {
                    console.log(result);
                    this.serverApi.setUserId(result.user.uid);
                    this.loggedIn(true);
                })
                    .catch(e => console.log(e));
            });
        };
    }
    render() {
        //Page Display is the framework that renders the app. everything nested should use slots provided by page-display
        return html `
    <page-display>
      <content-wrapper slot="content"
        ?showNavigation = "${false}"
      >
        <content-item slot="content">
          <title-bar label="Easy Events" slot="title-bar" > </title-bar>
          <form slot="content">
            <label class="AuthPane -label">
                Please Login to continue.
            </label>
            <br />
            <button @click="${this.handleGoogleLogin}" class="Btn" type="button" >Login With Google</button>
          </form>
        </content-item> 
      </content-wrapper>
    </page-display>
    `;
    }
};
__decorate([
    property()
], AuthController.prototype, "serverApi", void 0);
AuthController = __decorate([
    customElement('auth-controller')
], AuthController);
export { AuthController };
