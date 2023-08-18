import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '38021332-8e9737bba173cb2c49ad632d1',
    image_type: ' photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});
