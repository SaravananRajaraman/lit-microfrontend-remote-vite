import { LitElement, html, css } from 'lit';

class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: lightgray;
    }
  `;

  render() {
    return html`<p>Hello, Lit from Microfrontend!</p>`;
  }
}

customElements.define('my-element', MyElement);

export default MyElement;
