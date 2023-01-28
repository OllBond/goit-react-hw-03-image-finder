import css from './ImageSearch/ImageGalleryItem.module.css';
const ImageGalleryItem = () => {
  return (
    <li class={css.imageGalleryItem}>
      <img className={css.imageGalleryItemImage} src="" alt="" />
    </li>
  );
};
export default ImageGalleryItem;
