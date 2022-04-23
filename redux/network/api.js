export const URL = 'https://fakestoreapi.com/products';
export const PROFILE_URL = 'https://rickandmortyapi.com/api/character/1';

const request = async (method, endpoint) => {
  const url = `${URL}${endpoint}`;

  return fetch(url, {
    method,
  })
    .then(res => res.json())
    .then(res => {
      return {
        networkSuccess: true,
        data: res,
      };
    })
    .catch(e => ({networkSuccess: false}));
};

const requestProfile = async method => {
  const url = `${PROFILE_URL}`;
  return fetch(url, {
    method,
  })
    .then(res => res.json())
    .then(res => {
      return {
        networkSuccess: true,
        data: res,
      };
    })
    .catch(e => ({networkSuccess: false}));
};
export {request, requestProfile};
