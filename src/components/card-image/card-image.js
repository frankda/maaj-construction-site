import React from 'react';
import './card-image.scss';
import Modal from 'react-modal';
import Slider from "react-slick";

Modal.setAppElement('#___gatsby');

const CardImage = ({images, cover}) => {
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

  const renderModalImages = () => {
    if (images !== undefined) {
      return (
        images.map((img, i) => {
          return (
            <div key={i} className="card-image__carousel-item">
              <img className="card-image__modal-image" src={img} alt="Site image" />
            </div>
          )
        })
      )
    }
  }

  return (
    <div className="card-image">
      <div className="card-image__overlay"></div>
      <div className="card-image__bg-image-wrapper">
        <div className="card-image__bg-image" style={{backgroundImage: `url("${cover}")`}}></div>
      </div>
      <div className="card-image__content">
        <h6 className="card-image__title">name</h6>
        <div className="card-image__description-wrapper">
          <div className="card-image__description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minus quasi fugiat</p>
            <button onClick={openModal} className="card-image__cta btn" href="#">Take a look</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="card-image__modal"
        overlayClassName="card-image__modal-overlay"
      >
        <Slider {...carouselSettings} className="card-image__modal-carousel">
          {renderModalImages()}
        </Slider>
      </Modal>
    </div>
  )
}

export default CardImage;
