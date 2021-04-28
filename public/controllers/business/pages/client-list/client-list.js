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
      <table class="tg">
        <thead>
          <tr>
            <th class="tg-0lax">Name</th>
            <th class="tg-0lax">Phone</th>
            <th class="tg-0lax">Email</th>
            <th class="tg-0lax">Inquiry Count</th>
          </tr>
          ${this.clients.map(client => {
            return html `
            <tr>
              <th class="tg-0lax">${client.name}</th>
              <th class="tg-0lax">${client.phone}</th>
              <th class="tg-0lax">${client.email}</th>
              <th class="tg-0lax">${client.inquiries ? client.inquiries.length : "0"}</th>
            </tr>
          `;
        })}
        </thead>
      </table>
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
