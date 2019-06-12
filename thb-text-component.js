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
    this.numberText = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    this.digitText = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];
  }

  convertToText() {

    let value = this.parseNumber(this.value);
    let text = '';
    if (value) {
      const valueStr = value.toString();
      const arrStr = valueStr.split('.', 2);
      const decicaml = arrStr[0];

      if (decicaml != '0') {
        text = this.getText(decicaml);
      }
      text = `${text}บาท`;
      const point = arrStr[1] ? Number.parseInt(arrStr[1]).toString() : undefined;
      if(point) {
        text = `${text}${this.getText(point)}สตางค์`;
      } else {
        text = `${text}ถ้วน`;
      }
    }
    return value ? text : 'Error';
  }

  getText(value) {
    let digit = 0;
    let text = '';
    for (let i = value.length - 1; i >= 0; i--) {
      const million = Math.floor(digit / 6);
      let millionText = '';
      if (digit % 6 === 0) {
        for (let j = 0; j < million; j++) {
          millionText = millionText + 'ล้าน';
        }
      }
      if (value[i] === '1' && digit % 6 === 0 && digit !== value.length - 1) {
        text = `เอ็ด${millionText}${text}`;
      }
      else {
        const numVal = Number.parseInt(value[i]);
        if (digit % 6 === 1 && numVal === 1) {
          text = `สิบ${text}`;
        }
        else if (digit % 6 === 1 && numVal === 2) {
          text = `ยี่สิบ${text}`;
        }
        else {
          text = `${this.numberText[Number.parseInt(value[i])]}${this.digitText[digit % 6]}${millionText}${text}`;
        }
      }
      digit++;
    }
    return text;
  }

  parseNumber(val) {
    return this.isNumber(val) ? Number.parseFloat(Number.parseFloat(val).toFixed(2)) : undefined;
  }

  isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  }
}

window.customElements.define('thb-text-component', ThbTextComponent);
