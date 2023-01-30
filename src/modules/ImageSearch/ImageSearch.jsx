import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { searchImage } from '../../shared/components/Modal/services/img-serch-api';

class ImageSearch extends Component {
  state = {
    search: '',
    items: [],
    page: 1,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    // якщо попередня строка пошуку не дорівнює актуальній
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }
  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const { hits } = await searchImage(search, page);
      this.setState(({ items }) => ({ items: [...items, ...hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }
  searchImage = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
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
