var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { style } from './content-wrapper-nav-css';
let ContentWrapperNav = class ContentWrapperNav extends LitElement {
    constructor() {
        super(...arguments);
        this.selectItem = (item) => {
            let event = new CustomEvent('page-selected', {
                detail: {
                    data: { page: item.target },
                    message: 'Page Item Selected'
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);
        };
    }
    render() {
        return html `
      <slot name="title-bar"></slot>
      <div id="navigation-body">
        ${this.items.map(item => html `
          <div
            id="navigation-item-${item.label.toLowerCase()}"
            class="navigation-body-item ${item.active ? "active" : ""}"
            name="${item.target}"
            @click="${() => { this.selectItem(item); }}"
          >
            <h2>${item.label}</h2>
          </div>
        `)}
      </div>
    `;
    }
};
ContentWrapperNav.styles = style;
__decorate([
    property({ type: String })
], ContentWrapperNav.prototype, "label", void 0);
__decorate([
    property({ type: Array })
], ContentWrapperNav.prototype, "items", void 0);
ContentWrapperNav = __decorate([
    customElement('content-wrapper-nav')
], ContentWrapperNav);
export { ContentWrapperNav };
