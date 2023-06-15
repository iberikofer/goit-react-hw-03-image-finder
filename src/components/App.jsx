import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      images: [],
      selectedImage: null,
      currentPage: 1,
      isLoading: false,
    };
  }

  handleSavingQuery = queryText => {
    this.setState({
      query: queryText,
    });
  };

  handleAddingImages = imagesArr => {
    this.setState({ images: imagesArr });
  };

  handleAddingMoreImages = imagesArr => {
    this.setState(prevState => ({
      images: [...prevState.images, ...imagesArr],
    }));
  };

  handleError = errorMessage => {
    this.setState({ errorText: errorMessage });
  };

  handleCurrentPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  handleOpenModal = image => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  handleLoader = () => {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'grid',
          fontSize: 40,
          color: '#010101',
          gridTemplateColumns: '1fr',
          gridGap: 16,
          paddingBottom: 25,
        }}
      >
        <Searchbar
          addImages={this.handleAddingImages}
          onError={this.handleError}
          saveQuery={this.handleSavingQuery}
        />
        <ImageGallery
          state={this.state}
          loaderToggle={this.handleLoader}
          addMoreImages={this.handleAddingMoreImages}
          onError={this.handleError}
          saveCurrentPage={this.handleCurrentPage}
          openModal={this.handleOpenModal}
        />
        {this.state.selectedImage && (
          <Modal
            selectedImage={this.state.selectedImage.largeImageURL}
            closeModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
  selectedImage: PropTypes.object,
};
