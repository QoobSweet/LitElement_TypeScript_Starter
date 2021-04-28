import { LitElement, html, customElement, property } from 'lit-element';
import './controllers/app/page-controller'

@customElement('custom-app')
export class CustomApp extends LitElement {

  render() {
    return html`
      <page-controller></page-controller>
    `;
  }
}