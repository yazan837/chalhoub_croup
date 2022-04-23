import request from '../redux/network/api';
import {getProducts} from '../redux/network/General';
global.fetch = jest.fn();
jest.useFakeTimers();

test('request', () => {
  const method = 'GET';
  const url = `https://fakestoreapi.com/products'`;
  fetch(url, {
    method,
  });

  fetch.mockResponseIsSuccess = body => {
    fetch.mockImplementationForOnce(() =>
      Promise.resolve({json: () => Promise.resolve(JSON.parse(body))}),
    );
  };
});
