import React, {useState} from 'react'
import flower from '../images/flower.png'
import ContactModal from '../components/ContactModal';

function Invitation() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function FamilyInfo({dad, mom, child, relation}) {
    return (
      <div className='invitation__family'>
          <div className='invitaion__parent'>
              <div>{dad}·{mom}</div>
          </div>
          <div>{relation}</div>
          <div className='invitation__child'>{child}</div>
      </div>
    )
  }
  return (
    <div className='bc-pink container'>
        <img src={flower} className='flower' alt='flower'/>
        <div className='invitation__title'>Kính mời bạn</div>
        <div className='invitation__content'>
          <div>Mối quan hệ rất quý giá đó</div>
          <div>Chúng tôi sẽ trở thành một gia đình.</div>
          <div>Nhìn về cùng một hướng</div>
          <div>Chúng tôi muốn đi bộ cùng nhau.</div>
          <div>Một khởi đầu cho đôi trai gái </div>
          <div>Mời bạn tới chung vui cùng gia đình.</div>
        </div>
        <FamilyInfo dad="Bố Ninh" mom="Mẹ Tám" child="Trần Bình" relation="con trai" />
        <button className='invitation__btn-contact' onClick={openModal}>Liên hệ</button>
        {isModalOpen && (
          <ContactModal closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Invitation
