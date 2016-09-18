import { completeHeaders, fetch } from './helpers';
import { merge, prop } from 'ramda';
import { API_URL } from '../../constants';

export function get(endpoint, _options = {}) {
  const url = `${API_URL}/${endpoint}`;
  const headers = completeHeaders(prop('headers', _options));
  const options = merge(_options, { 'method': 'GET', 'headers': headers });
  return fetch(url, options);
}

export function put(endpoint, body, _options = {}) {
  const url = `${API_URL}/${endpoint}`;
  const headers = completeHeaders(prop('headers', _options));
  const options = merge(
    _options, {
      'method': 'PUT',
      'headers': headers,
      'body': JSON.stringify(body),
    });
  return fetch(url, options);
}

export function post(endpoint, body, _options = {}) {
  const url = `${API_URL}/${endpoint}`;
  const headers = completeHeaders(prop('headers', _options));
  const options = merge(
    _options, {
      'method': 'POST',
      'headers': headers,
      'body': JSON.stringify(body),
    });
  return fetch(url, options);
}

export function remove(endpoint, body = {}, _options = {}) {
  const url = `${API_URL}/${endpoint}`;
  const headers = completeHeaders(prop('headers', _options));
  const options = merge(
    _options, {
      'method': 'DELETE',
      'headers': headers,
      'body': JSON.stringify(body),
    });
  return fetch(url, options);
}
