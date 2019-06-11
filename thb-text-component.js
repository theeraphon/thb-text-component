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
      <span>[[convertToText()]]</span>
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
    const value = this.parseNumber(this.value);
    if (value) {

    }
    return value ? this.value : 'Error';
  }

  parseNumber(val) {
    return this.isNumber(val) ? Number.parseFloat(Number.parseFloat(val).toFixed(2)) : undefined;
  }

  isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  }
}

window.customElements.define('thb-text-component', ThbTextComponent);
