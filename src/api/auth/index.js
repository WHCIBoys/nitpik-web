// import { post } from '../server/';
//
// const LOGIN_ERR_MSG = `
//   The username or password you have entered is invalid.
// `;

export function login() {
  return new Promise((resolve) => {
    return resolve({
      user: {
        id: '1',
        First: 'Mandish',
        Last: 'Shah',
      },
      token: 'something',
    });
    // .then(json => resolve(json.meta))
    // .then(null, () => reject(new Error(LOGIN_ERR_MSG)));
  });
}
