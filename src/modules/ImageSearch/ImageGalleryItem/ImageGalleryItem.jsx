import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
const ImageGalleryItem = ({ id, src, showImage, largeImageURL, tags }) => {
  return (
    <li
      className={css.imageGalleryItem}
      key={id}
      onClick={() => showImage({ largeImageURL, tags })}
    >
      <img className={css.imageGalleryItemImage} src={src} alt={tags} />
    </li>
  );
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  showImage: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
