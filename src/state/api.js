import {
  BASE_URL,
  loginEndPoint,
  planetSearchEndPoint,
} from '../common/apiendpoints';

export const doLogin = async (data) => {
  const url = new URL(`${BASE_URL}${loginEndPoint}`);
  const params = {
    search: data.username,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 30 * 1000,
  });
  const result = await response.json();
  console.log('doLogin Result', result);
  return result;
};

export const doPlanentSearch = async () => {
  const url = new URL(`${BASE_URL}${planetSearchEndPoint}`);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 30 * 1000,
  });
  const result = await response.json();
  console.log('doPlanentSearch Result', result);
  return result;
};
