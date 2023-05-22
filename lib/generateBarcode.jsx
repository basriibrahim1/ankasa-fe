import JsBarcode from "jsbarcode";


export default function generateBarcode(canvasId, barcodeValue) {
    JsBarcode(`#${canvasId}`, barcodeValue, {
      format: "CODE128",
      width: 3,
      height: 100,
      displayValue: true,
    });
  }