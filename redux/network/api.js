export const PROFILE_URL = 'https://rickandmortyapi.com/api/character/1';

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
export {requestProfile};
