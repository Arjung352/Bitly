import { QRCodeSVG } from "qrcode.react"; // SVG version, not canvas

export default function Qrcode({ shortUrl }) {
  const downloadQR = () => {
    const svg = document.getElementById("qrCodeSVG");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const jpegUrl = canvas.toDataURL("image/jpeg");
      const a = document.createElement("a");
      a.href = jpegUrl;
      a.download = "qr-code.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    img.src = url;
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <QRCodeSVG id="qrCodeSVG" value={shortUrl} size={120} />
        <button
          onClick={downloadQR}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download QR Code
        </button>
      </div>
    </>
  );
}
