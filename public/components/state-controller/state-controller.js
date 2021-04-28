var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import '../../controllers/auth/auth-controller';
import '../../controllers/business/business-controller';
import '../../controllers/client/client-controller';
//elements
let StateController = class StateController extends LitElement {
    render() {
        if (this.isLoggedIn === true) {
            return html `
        <business-controller
          .serverApi = "${this.serverApi}"
        >
        </business-controller>
      `;
        }
        else {
            return html `
        <auth-controller
          .serverApi = "${this.serverApi}"
        ></auth-controller>
      `;
        }
    }
};
__decorate([
    property({ type: Boolean })
], StateController.prototype, "isLoggedIn", void 0);
__decorate([
    property({ type: Object })
], StateController.prototype, "user", void 0);
__decorate([
    property({ type: Object })
], StateController.prototype, "serverApi", void 0);
StateController = __decorate([
    customElement('state-controller')
], StateController);
export { StateController };
