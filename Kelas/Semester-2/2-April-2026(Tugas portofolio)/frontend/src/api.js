import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Get CSRF cookie before auth requests
export async function csrf() {
  await axios.get('/sanctum/csrf-cookie', { withCredentials: true });
}

export default api;
