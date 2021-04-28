import { LitElement, html, customElement, property, TemplateResult } from 'lit-element';
import '../../components/page-display/page-display';
import '../../components/title-bar/title-bar';
import '../../components/content-wrapper/content-wrapper';
//elements

interface PageItem {
  label: String,
  target: String,
  active: Boolean,
  render: TemplateResult
}

@customElement('page-controller')
export class PageController extends LitElement {
  @property({ type: String }) selectedPage = "page-1";

  createPage = (label: string, target: string, html: TemplateResult): PageItem => {
    return { label: label, target: target, active: target === this.selectedPage, render: html };
  }

  pages = () => { return [
    this.createPage("Page 1", "page-1", html`
    `),
    this.createPage("Page 2", "page-2", html`
    `),
    this.createPage("Page 3", "page-3", html`
    `),
    this.createPage("Page 4", "page-4", html`
    `),
  ]}

  render() {
    return html`
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
  
}