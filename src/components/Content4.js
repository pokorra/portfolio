import React, { useState } from "react";

const ContactItem = ({ text, secondText, width, color, font }) => {
  const [contactData, setContactData] = useState(text);

  const toggle = () => {
    if (contactData === text) {
      setContactData(secondText);
    } else {
      setContactData(text);
    }
  };

  return (
    <div
      onClick={toggle}
      className="content__item content__item--without-inner"
      style={{ width: width, backgroundColor: color, color: font }}
    >
      <p className="content__contact-data">{contactData} </p>
    </div>
  );
};

const Content4 = () => {
  return (
    <div className="content">
      <ContactItem
        text=" @ email"
        secondText="patrycja.pe@gmail.com"
        color="#ffde59"
        width="50%"
        font="black"
      />
      <ContactItem
        text="phone number"
        secondText="(48)723-468-495"
        color="#3c5947"
        width="49%"
        font="white"
      />
    </div>
  );
};

export default Content4;
