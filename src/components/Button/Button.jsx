import React, { Component } from 'react';
import { Loader } from '../Loader/Loader';
import axios from 'axios';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  handleLoadMore = async () => {
    const { state, loaderToggle, addMoreImages, onError, saveCurrentPage } =
      this.props;
    loaderToggle();

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${state.query}&page=${
          state.currentPage + 1
        }&key=37196317-2c59749f8d103970cbe5890ed&image_type=photo&orientation=horizontal&per_page=12`
      );
      const options = response.data.hits.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        Tags: image.tags,
      }));
      addMoreImages(options);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
      });
    } catch (error) {
      onError(error);
    } finally {
      loaderToggle();
      saveCurrentPage();
    }
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 25,
        }}
      >
        {this.props.state.isLoading ? (
          <Loader />
        ) : (
          <button className={css.button} onClick={this.handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

Button.propTypes = {
  state: PropTypes.object.isRequired,
  loaderToggle: PropTypes.func.isRequired,
  addMoreImages: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  saveCurrentPage: PropTypes.func.isRequired,
};
