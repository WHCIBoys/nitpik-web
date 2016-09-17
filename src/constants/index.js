export const LOGIN_USER_PENDING = 'App/LOGIN_USER_PENDING';
export const LOGIN_USER_SUCCESS = 'App/LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'App/LOGIN_USER_ERROR';

export const LOGOUT_USER = 'App/LOGOUT_USER';
export const FORM_RESET = 'redux-form/RESET';

export const FACEBOOK_GRAPH_URL = 'https://graph.facebook.com/';

export const MOCK_NITS_FOR_MAAZ = {
  nits: [
    {
      id: 1,
      content: 'Sup brandon',
      author: {
        name: 'Maaz',
      },
      user: {
        name: 'Brandon',
      },
    },
  ],
  friendships: [
    {
      id: 1,
      user: {
        name: 'Maaz',
      },
      friend: {
        name: 'Brandon Bowen',
        facebookId: '10205270670229481',
      },
    },
    {
      id: 2,
      user: {
        name: 'Maaz',
      },
      friend: {
        name: 'Mandish Shah',
        facebookId: '10207412737774454',
      },
    },
    {
      id: 3,
      user: {
        name: 'Maaz',
      },
      friend: {
        name: 'Ramanpreet Nara',
        facebookId: '703342513133853',
      },
    },
  ],
};

export const FAV_FRIENDS_LIST = [{
  firstName: 'Mandish',
  lastName: 'Shah',
}, {
  firstName: 'Ramanpreet',
  lastName: 'Nara',
}, {
  firstName: 'Maaz',
  lastName: 'Ali',
}, {
  firstName: 'Brandon',
  lastName: 'Bowen',
}];

export const LOAD_USER_NITS = {
  PENDING: 'LOAD_USER_NITS_PENDING',
  SUCCESS: 'LOAD_USER_NITS_SUCCESS',
  ERROR: 'LOAD_USER_NITS_ERROR',
};
