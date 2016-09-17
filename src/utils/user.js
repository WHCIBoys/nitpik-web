import * as C from '../constants';

export function getUserFbProfileUrl(facebookId, size) {
  const MAX_WIDTH = 1000;
  switch (size) {
  case 'normal':
    return `${C.FACEBOOK_GRAPH_URL}${facebookId}/picture?type=large`;
  case 'large':
    return `${C.FACEBOOK_GRAPH_URL}${facebookId}/picture?width=+${MAX_WIDTH}`;
  default:
    return `${C.FACEBOOK_GRAPH_URL}${facebookId}/picture?type=large`;
  }
}
