import { QRCodeSVG } from "qrcode.react";

function Qrcode({ shortUrl }) {
  return <QRCodeSVG value={shortUrl} size={128} />;
}

export default Qrcode;
