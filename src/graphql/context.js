import fetch from 'node-fetch';

const API_URL = 'http://localhost:3000';

export const context = () => {

  return {
    getUsers: (input = '') => fetch(`${API_URL}/users/?${input}`),
    getUser: (id = '') => fetch(`${API_URL}/users/${id}`),
    getPosts: (input = '') => fetch(`${API_URL}/posts/?${input}`),
    getPost: (id = '') => fetch(`${API_URL}/posts/${id}`),
  }
}
