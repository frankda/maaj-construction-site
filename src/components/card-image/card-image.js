import React from 'react';
import './card-image.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import Slider from "react-slick";

Modal.setAppElement('#___gatsby');

const CardImage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="card-image" style={{backgroundImage: 'url("https://picsum.photos/500/400")'}}>
      <div className="card-image__overlay"></div>
      <div className="card-image__content">
        <h4 className="card-image__title">name</h4>
        <div className="card-image__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minus quasi fugiat odit fugit, eos dicta eius optio obcaecati veritatis magnam consequatur, alias, esse in repudiandae tempora animi voluptas corporis!</p>
        </div>
        <p onClick={openModal} className="card-image__cta" href="#">Take a look<FontAwesomeIcon className="card-image__cta-icon" icon="chevron-right" /></p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="card-image__modal"
        overlayClassName="card-image__modal-overlay"
      >
        <Slider {...carouselSettings} className="card-image__modal-carousel">
          <div>
            <button onClick={closeModal}>close1</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </div>

          <div>
            <button onClick={closeModal}>close2</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </div>

        </Slider>
      </Modal>
    </div>
  )
}

export default CardImage;
