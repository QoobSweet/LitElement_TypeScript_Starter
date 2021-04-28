var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { style } from './title-bar-css';
//elements
let TitleBar = class TitleBar extends LitElement {
    render() {
        return html `
    <h1>${this.label}</h1>
    `;
    }
};
TitleBar.styles = style;
__decorate([
    property({ type: String })
], TitleBar.prototype, "label", void 0);
TitleBar = __decorate([
    customElement('title-bar')
], TitleBar);
export { TitleBar };
