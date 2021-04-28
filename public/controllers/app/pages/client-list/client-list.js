var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { style } from './client-list-css';
let ClientList = class ClientList extends LitElement {
    render() {
        console.log(this.clients);
        return html `

    `;
    }
};
ClientList.styles = style;
__decorate([
    property({ type: Object })
], ClientList.prototype, "clients", void 0);
ClientList = __decorate([
    customElement('client-list')
], ClientList);
export { ClientList };
