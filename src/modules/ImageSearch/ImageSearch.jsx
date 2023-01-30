import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from '../../shared/components/Modal/Modal';
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
    // і попередня строка не дорівнює новій сторінці
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }
  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      // айякс запит
      const hits = await searchImage(search, page);
      //дописуємо новий items - це розпилений старий items і розпилений hits
      // те, що отримали з 2,3 сторінки дописуємо в те, що було
      this.setState(({ items }) => ({ items: [...items, ...hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }
  searchImage = ({ search }) => {
    // коли починається пошук page має бути з 1 сторінки а items - пустий
    this.setState({ search, items: [], page: 1 });
  };
  onLoadMore = () => {
    // передаємо call-back, бо змінюється state
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  render() {
    const { items, loading, error } = this.state;
    const { searchImage, onLoadMore } = this;
    return (
      <>
        <Searchbar onSubmit={searchImage} />
        <ImageGallery items={items} />
        {error && <p>{error}</p>}
        {loading && <p>Loading ...</p>}
        {/* якщо є картинки - показуємо кнопку */}
        {Boolean(items.length) && <Button onLoadMore={onLoadMore} />}
        <Modal>
          <div></div>
        </Modal>
      </>
    );
  }
}

export default ImageSearch;
