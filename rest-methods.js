import fetch from 'node-fetch';

const API_URL = process.env.API_URL;

const get = (endpoint, urlParam, requestInit = {}) => {
  return  fetch(API_URL+'/' + endpoint + '?' + new URLSearchParams(urlParam).toString(),
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...requestInit
  });
};

const post = (endpoint, body, requestInit = {}) => {
  return  fetch(API_URL+'/' + endpoint,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...requestInit
  });
};
// Modifica o obj, passando apenas 1 campo caso o obj tenha 5 campos alterara somente para 1.
const put = (endpoint, body, requestInit = {}) => {
  return  fetch(API_URL+'/' + endpoint,
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...requestInit
  });
};
// Modifica o obj, alterando apenas o campo passado o resto dos campos nao se altera.
const patch = (endpoint, body, requestInit = {}) => {
  return  fetch(API_URL+'/' + endpoint,
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...requestInit
  });
};

const delete = (endpoint, body, requestInit = {}) => {
  return  fetch(API_URL+'/' + endpoint,
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...requestInit
  });
};
