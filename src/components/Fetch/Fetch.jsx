// import { Component } from 'react';
// import axios from 'axios';

// export class Fetch extends Component {
//   handleQuerySearch = searchText => {
//     try {
//       const response = axios.get(
//         `https://pixabay.com/api/?q=${searchText}&page=1&key=37196317-2c59749f8d103970cbe5890ed&image_type=photo&orientation=horizontal&per_page=12`
//       );
//       const options = response.data.hits.map(image => ({
//         id: image.id,
//         webformatURL: image.webformatURL,
//         largeImageURL: image.largeImageURL,
//       }));
//       this.props.handleAddingImages(options);
//     } catch (error) {
//       this.props.handleError(error.message);
//     }
//   };
// }
