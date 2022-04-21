import reactotron from 'reactotron-react-native';

export const URL = 'https://fakestoreapi.com/products';

const request = async (method, endpoint) => {
  const url = `${URL}${endpoint}`;

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => {
      return {
        networkSuccess: 200,
        data: res,
      };
    })
    .catch(e => ({networkSuccess: false}));
};

export {request};
