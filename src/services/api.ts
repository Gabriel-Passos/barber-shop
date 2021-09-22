import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://barber-shop-heroku.herokuapp.com/',
});