import isoFetch from 'isomorphic-fetch';
import { getAdminToken } from '../storage';
import { compose, merge, objOf } from 'ramda';

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const authorizeHeaders = (headers) => {
  const token = getAdminToken();
  if (typeof token !== 'undefined') {
    return compose(
      merge(headers),
      objOf('Authorization')
    )(token);
  }
  return headers;
};

export const completeHeaders = (headers) => {
  if (typeof headers !== 'undefined') {
    return authorizeHeaders(
      merge(defaultHeaders, headers)
    );
  }
  return authorizeHeaders(defaultHeaders);
};

export const fetch = (url, options) => {
  return isoFetch(url, options)
          .then(checkStatus)
          .then(res => res.json());
};
