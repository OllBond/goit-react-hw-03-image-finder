import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
const ImageGallery = ({ items, showImage }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map(({ id, webformatURL, largeImageUrl, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            tags={tags}
            src={webformatURL}
            largeImageURL={largeImageUrl}
            showImage={showImage}
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
