import reactotron from 'reactotron-react-native';

export const URL = 'https://fakestoreapi.com/products';

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

export {request};
