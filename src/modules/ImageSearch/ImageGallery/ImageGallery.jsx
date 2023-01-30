import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
const ImageGallery = ({ items }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            src={webformatURL}
            bigImage={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
ImageGallery.defaultProps = {
  items: [],
};
