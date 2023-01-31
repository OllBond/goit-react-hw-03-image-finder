import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
const ImageGalleryItem = ({ id, src, showImage, largeImageUrl, tags }) => {
  return (
    <li
      className={css.imageGalleryItem}
      key={id}
      onClick={() => showImage({ tags, largeImageUrl })}
    >
      <img className={css.imageGalleryItemImage} src={src} alt={tags} />
    </li>
  );
};
export default ImageGalleryItem;
