var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import '../../components/page-display/page-display';
import '../../components/content-wrapper/content-wrapper';
import './pages/client-list/client-list';
let BusinessController = class BusinessController extends LitElement {
    constructor() {
        super(...arguments);
        this.clients = {};
        this.inquiries = {};
        this.selectedPage = "client-list";
        this.firstUpdated = () => { this.subscribeToServer(); };
        this.subscribeToServer = () => {
            this.serverApi.subscribeToServer();
            this.serverApi.socket.on("dbInquiries", (data, callback) => {
                console.log('recieving inquiries');
                console.log(data.inquiries);
                if (data.inquiries !== this.inquiries) {
                    this.inquiries = data.inquiries;
                    console.log(this.inquiries);
                    this.requestUpdate();
                }
                if (data.inquiries) {
                    callback({ status: 'recieved' });
                }
                else {
                    callback({ status: 'failed' });
                }
            });
            this.serverApi.socket.on("dbClients", (data, callback) => {
                console.log('recieving clients');
                console.log(data);
                if (data.clients !== this.clients) {
                    this.clients = data.clients;
                    this.requestUpdate();
                }
                if (data.clients) {
                    callback({ status: 'recieved' });
                }
                else {
                    callback({ status: 'failed' });
                }
            });
        };
        this.createPage = (label, target, html) => {
            return { label: label, target: target, active: target === this.selectedPage, render: html };
        };
        this.pages = () => {
            return [
                this.createPage("Clients", "client-list", html `
      <client-list slot="content" .clients="${this.clients}"></client-list>
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
    property({ type: Object })
], BusinessController.prototype, "serverApi", void 0);
__decorate([
    property({ type: Array })
], BusinessController.prototype, "clients", void 0);
__decorate([
    property({ type: Array })
], BusinessController.prototype, "inquiries", void 0);
__decorate([
    property({ type: String })
], BusinessController.prototype, "selectedPage", void 0);
BusinessController = __decorate([
    customElement('business-controller')
], BusinessController);
export { BusinessController };
