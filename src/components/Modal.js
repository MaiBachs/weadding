import React from 'react'

function Modal({ closeModal, who, account, kakaopay }) {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("계좌번호가 복사되었습니다.");
      })
      .catch((err) => {
        console.error('클립보드 복사 중 오류가 발생했습니다: ', err);
      });
  };

  return (
      <div className="modal">
        <div className="modal__content">
          <div className='modal__account'>Thông tin tài khoản</div>
          <div className='atext'>Có thể sao chép</div>
          <div className='modal__details'>
              <div className='modal_line'>{who}</div>
              <div>{account}</div>
          </div>
          <a href={kakaopay} className='modal__pay-link' role="button">
           카카오페이 송금하기</a>
          <div className='modal__buttons'>
              <button className='modal__btn-copy' onClick={() => copyToClipboard(account)}>Sao chép</button>
              <button className='modal_btn_close' onClick={closeModal}>Đóng</button>
          </div>
        </div>
      </div>
    );
}

export default Modal
