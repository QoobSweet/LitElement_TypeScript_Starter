var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import '../../components/page-display/page-display';
import '../../components/title-bar/title-bar';
import '../../components/content-wrapper/content-wrapper';
import './pages/client-list/client-list';
let PageController = class PageController extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedPage = "client-list";
        this.createPage = (label, target, html) => {
            return { label: label, target: target, active: target === this.selectedPage, render: html };
        };
        this.pages = () => {
            return [
                this.createPage("Clients", "client-list", html `
      <client-list slot="content" .clients="${[]}"></client-list>
    `),
                this.createPage("Calendar", "calendar-page", html `
    `),
                this.createPage("Out For Sign", "out-for-sign-page", html `
    `),
                this.createPage("Bookings", "bookings-page", html `
    `),
            ];
        };
    }
    render() {
        return html `
      <page-display>
        <title-bar slot="title-bar" label="Business"></title-bar>
        <content-wrapper slot="content"
          ?showNavigation = "${true}"
          .contentItems = "${this.pages()}" 
          @page-selected = "${(e) => { this.selectedPage = e.detail.data.page; console.log(this.selectedPage); this.requestUpdate(); }}"
        >
          ${this.pages().filter(page => page.target === this.selectedPage)[0].render}
        </content-wrapper>
      </page-display>
    `;
    }
};
__decorate([
    property({ type: String })
], PageController.prototype, "selectedPage", void 0);
PageController = __decorate([
    customElement('page-controller')
], PageController);
export { PageController };
