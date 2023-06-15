import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  handleClickedPhoto = () => {
    const modalImageUrl = this.props.state.images.find(
      image => image.id === this.props.id
    );
    this.props.openModal(modalImageUrl);
  };

  render() {
    const { image } = this.props;
    return (
      <div className={css.imageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={'Tags:' + image.tags}
          className={css.imageGalleryItemImage}
          id={this.props.id}
          onClick={this.handleClickedPhoto}
        />
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
