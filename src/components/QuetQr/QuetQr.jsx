import React from "react";
import QRCode from "react-qr-code";

const QuetQr = () => {
  return (
    <div className="mx-20 mt-10 h-80 bg-white qr_section text-center">
      <div className="qr_header py-4" style={{ backgroundColor: "#0a529c" }}>
        <h2 className="text-white uppercase font-semibold text-xl">quét qr</h2>
      </div>
      <div className="qr_body relative bg-white px-60 py-20">
        <div className="qr_img py-20 bg-black ">
          <QRCode
            id="qrcode"
            value="https://viblo.asia/u/tranchien"
            size={250}
            level={"H"}
            includeMargin={true}
            style={{
              margin: "0 auto",
              backgroundColor: "white",
              padding: "15px",
            }}
          />
        </div>
        <div className="qr_frame absolute"></div>
      </div>
    </div>
  );
};

export default QuetQr;
