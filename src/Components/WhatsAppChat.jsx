import React from "react";
import ReactWhatsapp from "react-whatsapp";

export default function WhatsAppChat(props) {
  const whatsAppButton = {
    margin: "20px auto",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    border: "1px solid blue",
    backgroundColor: "white",

    padding: "10px",
  };
  return (
    <div>
      <ReactWhatsapp
        style={whatsAppButton}
        number="+91-988-702-0529"
        message={props.msg}
      >
        {props.btnName}
      </ReactWhatsapp>
    </div>
  );
}
