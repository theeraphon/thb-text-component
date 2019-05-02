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
      <span>Hello [[convertToText()]]!</span>
    `;
  }
  static get properties() {
    return {
      value: {
        type: String,
      },
    };
  }

  constructor() {
    super();
  }

  convertToText() {
    // TODO: Add code to convert value to text here
    return this.value;
  }
}

window.customElements.define('thb-text-component', ThbTextComponent);
