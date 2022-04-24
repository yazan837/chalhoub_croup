global.fetch = jest.fn();
jest.useFakeTimers();

test('request', () => {
  fetch.mockResponseIsSuccess = body => {
    fetch.mockImplementationForOnce(() => {
      Promise.resolve({data: () => Promise.resolve(JSON.parse(body))});
    });
  };
});
