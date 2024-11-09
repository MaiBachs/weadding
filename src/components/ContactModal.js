import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function ContactModal({closeModal}) {

  const groomContact = [
    { person: "Chú rể Bình", phone: "01012345678" },
    { person: "Ông Ninh", phone: "01012345678" },
    { person: "Bà Tám", phone: "01012345678" },
  ];

  const brideContact = [
    { person: "Cô dâu X", phone: "01012345678" },
    { person: "Bố cô dâu", phone: "01012345678" },
    { person: "Mẹ cô dâu", phone: "01012345678" },
  ];


  return (
    <div className="modal">
      <div className="contact__content">
        <button onClick={closeModal} className="survey__btn-close">&times;</button>
        <div className='modal__account'>Contact</div>
        <div className="contact__boxes">
          {[...groomContact].map((contact, index) => (
            <div key={index} className="contact__box">
              <span>{contact.person}</span>
              <div className="contact__icons">
                <a href={`tel:${contact.phone}`}>
                  <BsFillTelephoneFill size="1em" className='contact__icon-phone'/>
                </a>
                <a href={`sms:${contact.phone}`}>
                  <HiMail size="1.5em"/>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="contact__boxes">
        {[...brideContact].map((contact, index) => (
            <div key={index} className="contact__box">
              <span>{contact.person}</span>
              <div className="contact__icons">
                <a href={`tel:${contact.phone}`}>
                    <BsFillTelephoneFill size="1em" className='contact__icon-phone'/>
                </a>
                <a href={`sms:${contact.phone}`}>
                  <HiMail size="1.5em"/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
