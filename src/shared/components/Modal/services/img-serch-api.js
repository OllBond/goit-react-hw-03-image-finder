import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32018824-12fed2968cd63512e54ef9084',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchImage = async (q, _page = 1) => {
  const {
    data: { hits },
  } = await instance.get('/', {
    params: {
      q,
      _page,
      per_page: 12,
    },
  });
  return hits;
};
