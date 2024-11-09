import React, {useState} from 'react'
import flower from '../images/flower.png'
// import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa6";
import Modal from '../components/Modal';
import '../css/Modal.css'

function ContactButton({ person, account, kakaopay }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <div className="contact__box">
          <span>{person}</span>
          <div className="contact__icons">
            <button onClick={openModal} className="contact__btn"><FaMoneyCheck size="1.5em"/></button>
          </div>
        </div>
        {isModalOpen && (
          <Modal closeModal={closeModal} who={person} account={account} kakaopay={kakaopay}/>
        )}
      </>
    );
  }


  function Account() {
    const groom_contact = [
      { person: "Thanh Bình", account: "MB 1002-123-456789", kakaopay: "" },
      { person: "Ông Ninh", account: "MB 0123456789", kakaopay: "" },
      { person: "Bà Tám", account: "MB 0123456789", kakaopay: "" },
    ];

    const bride_contact = [
        { person: "Nhà gái", account: "토스뱅크 1000-0123-4567" , kakaopay: "" },
        { person: "PaPa", account: "기업은행 0123456789", kakaopay: ""},
        { person: "MaMa", account: "국민은행 0123456789", kakaopay: "" },
      ];
  
    return (
      <div className="container">
        <img src={flower} className="flower" alt="flower"/>
        <div className='contact__title'>Mừng cưới 💕</div>
        <div className="contact__boxes">
          {groom_contact.map((contact, index) => (
            <ContactButton key={index} person={contact.person} account={contact.account} kakaopay={contact.kakaopay}/>
          ))}
        </div>
        <div className="contact__boxes">
          {bride_contact.map((contact, index) => (
            <ContactButton key={index} person={contact.person} account={contact.account} kakaopay={contact.kakaopay}/>
          ))}
        </div>
        <div className="contact__guide-text">Nhấp vào biểu tượng sẽ hiện thông tin tài khoản.</div>
      </div>
    );
  }

 

export default Account
