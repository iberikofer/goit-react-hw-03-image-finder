import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    // console.log(this.props.state);
    const { images, isLoading } = this.props.state;
    const buttonIsShowed =
      images.length > 0 &&
      !isLoading &&
      images.length >= 12 &&
      images.length % 12 === 0;
    return (
      <div>
        <div className={css.imageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              image={image}
              state={this.props.state}
              openModal={this.props.openModal}
            />
          ))}
        </div>
        {buttonIsShowed && (
          <Button
            state={this.props.state}
            loaderToggle={this.props.loaderToggle}
            addMoreImages={this.props.addMoreImages}
            onError={this.props.onError}
            saveCurrentPage={this.props.saveCurrentPage}
          />
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  loaderToggle: PropTypes.func.isRequired,
  addMoreImages: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  saveCurrentPage: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
