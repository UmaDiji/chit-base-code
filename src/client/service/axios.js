import axios from 'axios';

let baseURL = '';
if (process.env.NODE_ENV === 'production') {
  baseURL = window.location.protocol + '//' + window.location.host;
} else {
  baseURL = process.env.API_URL;
}
const httpService = axios.create({ baseURL: baseURL });
export default httpService;
