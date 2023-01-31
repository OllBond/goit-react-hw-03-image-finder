const ImageDetails = ({ tags, largeImageURL }) => {
  return <img src={largeImageURL} alt={tags} width="700" />;
};
export default ImageDetails;
