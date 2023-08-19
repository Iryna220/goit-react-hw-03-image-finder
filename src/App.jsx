import styles from './App.module.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { ToastContainer } from 'react-toastify';
import { fetchPicturesQuery } from 'service/api';

export default class App extends Component {
  state = {
    search: '',
    pictures: [],
    page: 1,
    largeImage: null,
    loading: false,
  };
  searchPictures = ({ search }) => {
    this.setState({ search, pictures: [], page: 1 });
  };
  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { pictures, loading } = this.state;
    const { loadMore, openModal } = this;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.searchPictures} />
        <ImageGallery pictures={pictures} openModal={openModal} />
        {loading && <Loader />}
        <Button onClick={loadMore} />
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}
