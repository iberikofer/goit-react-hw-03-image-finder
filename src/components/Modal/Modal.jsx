import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleOpenModal = () => {
    const instance = basicLightbox.create(
      `<img src="${this.props.selectedImage}" alt="Bigger modal image">`
    );
    instance.show();
  };

  handleCloseModal = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleImageClick = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal} onClick={this.handleImageClick}>
          {/* Remove the function call from here */}
          <img
            src={this.props.selectedImage}
            alt="Modal img"
            onClick={this.handleOpenModal}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
