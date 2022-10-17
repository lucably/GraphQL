import fetch from 'node-fetch';

const API_URL = 'http://localhost:3000';

export const context = () => {

  return {
    getUsers: () => fetch(`${API_URL}/users/`),
    getUser: (id = '') => fetch(`${API_URL}/users/${id}`),
    getPosts: () => fetch(`${API_URL}/posts/`),
    getPost: (id = '') => fetch(`${API_URL}/posts/${id}`),
  }
}
