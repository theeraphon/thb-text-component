import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `thb-text-component`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ThbTextComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'thb-text-component',
      },
    };
  }
}

window.customElements.define('thb-text-component', ThbTextComponent);
