import { LightningElement, api } from "lwc";
import { loadScript } from "lightning/platformResourceLoader";

import JsBarcode128 from "@salesforce/resourceUrl/JsBarcode";

export default class BarcodeGenerator extends LightningElement {
  @api recordId;
  @api showValue;
  @api label;

  connectedCallback() {
    // render the barcode
    loadScript(this, JsBarcode128 + "/JsBarcode.code128.min.js").then(() => {
      console.log(`Generating JsBarcode for record ${this.recordId}`);
      JsBarcode(this.refs.svgElement).init();
    });
  }
}
