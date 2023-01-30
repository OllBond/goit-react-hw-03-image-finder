import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
const ImageGalleryItem = ({ id, src, bigImage }) => {
  return (
    <li class={css.imageGalleryItem} id={id}>
      <img className={css.imageGalleryItemImage} src={src} alt={bigImage} />
    </li>
  );
};
export default ImageGalleryItem;
