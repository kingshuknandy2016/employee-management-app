import { sign } from 'jsonwebtoken';

export const JWT_Secret = 'secretKey';

export function mimicBackendSignInAPI(username: string, password: string) {
  let jwt: string = '';
  if (username === 'admin' && password === 'password') {
    jwt = sign({ username, role: 'admin' }, JWT_Secret, {
      expiresIn: '1800s',
    });
    return {
      auth_token: jwt,
      userDetails: { username, role: 'admin' },
      statusCode: 200,
    };
  } else if (username === 'employee' && password === 'password') {
    console.log('reached');
    jwt = sign({ username, role: 'user' }, 'secretKey', {
      expiresIn: '1800s',
    });
    return {
      auth_token: jwt,
      userDetails: { username, role: 'user' },
      statusCode: 200,
    };
  } else {
    return {
      auth_token: jwt,
      userDetails: { username, role: 'admin' },
      statusCode: 401,
    };
  }
}
