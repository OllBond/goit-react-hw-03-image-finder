import axios from 'axios';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { searchImage } from '../../shared/components/Modal/services/img-serch-api';
// import css from './ImageSearch.module.css';

class ImageSearch extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    // якщо попередня строка пошуку не дорівнює актуальній
    if (prevState.search !== search) {
      this.fetchImages();
    }
  }
  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search } = this.state;
      const { hits } = await searchImage(search);
      this.setState(({ items }) => ({ items: [...items, ...hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }
  searchImage = ({ search }) => {
    this.setState({ search });
  };
  render() {
    const { items, loading, error } = this.state;
    const { searchImage } = this;
    return (
      <>
        <Searchbar onSubmit={searchImage} />
        <ImageGallery items={items} />
        {error && <p>{error}</p>}
        {loading && <p>Loading ...</p>}
      </>
    );
  }
}

export default ImageSearch;
