import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    per_page: 12,
    key: '32018824-12fed2968cd63512e54ef9084',
  },
});

export const searchImage = async q => {
  const { hits } = await instance.get('/', {
    params: {
      q,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return hits;
};
// `/?q=${search}&page=1&key=32018824-12fed2968cd63512e54ef9084&image_type=photo&orientation=horizontal&per_page=12`
