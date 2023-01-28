import ImageGalleryItem from './ImageSearch/ImageGalleryItem/ImageGalleryItem';
import css from './ImageSearch/ImageGallery.module.css';
const ImageGallery = () => {
  return (
    <ul class={css.imageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
