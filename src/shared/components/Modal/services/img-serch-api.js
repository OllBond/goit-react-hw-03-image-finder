import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32018824-12fed2968cd63512e54ef9084',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchImage = async q => {
  const { hits } = await instance.get('/', {
    params: {
      per_page: 12,
      q,
    },
  });
  return hits;
};
// `/?q=${search}&page=1&key=32018824-12fed2968cd63512e54ef9084&image_type=photo&orientation=horizontal&per_page=12`
