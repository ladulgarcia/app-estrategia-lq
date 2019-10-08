import axios from 'axios';
const baseURL = 'http://localhost:3000/'
// process.env.NODE_ENV === 'production'
//   ? (const baseURL = 'here should be your production endpoint')
//   : (const baseURL = 'http://localhost:3000');

const SERVICE = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await SERVICE.get('api/auth/');
  },
  signup: async (user) => {
    return await SERVICE.post('api/auth/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('api/auth/login', user);
  },
  logout: async () => {
    return await SERVICE.get('api/auth/logout');
  }
};

export default MY_SERVICE;