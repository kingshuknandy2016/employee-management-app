import { HttpStatusCode } from 'axios';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

const JWT_SECRET: string = process.env.JWT_SECRET || '"123456"';
const tokenExpirationInSeconds = 1800; // Expires in  30 min

export type Role = 'ADMIN' | 'USER' | 'HR' | 'SALES' | 'DEV';

/**
 * @interface User Details to be passed while Token Generation
 */
export interface UserDetails {
  username: string;
  role: Role;
}
/**
 * Generate JWT Token
 * @param userDetails : Pass userDetails
 * @returns Token String
 */
export const generateToken = (userDetails: UserDetails): string => {
  const jwt_token = sign({ userDetails }, JWT_SECRET, {
    expiresIn: tokenExpirationInSeconds,
  });
  return jwt_token;
};

/**
 * Verify the Token and returns the encrypted data
 * @param token :
 * @returns UserData
 */
// Decoded Token Format:{"userDetails":{"username":"admin","role":"ADMIN"},"iat":1703676819,"exp":1703678619}
export const verifyToken = (token: string): JwtPayload => {
  try {
    const decoded: JwtPayload = verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (err: any) {
    throw new Error('Invalid token:' + err);
  }
};

export const getUserDetailsDecoded = (decoded: JwtPayload): UserDetails => {
  return decoded['userDetails'] as UserDetails;
};
export const getIssuedAtDecoded = (decoded: JwtPayload): number => {
  return decoded['iat'] as number;
};

export const getExpirationDecoded = (decoded: JwtPayload): number => {
  return decoded['exp'] as number;
};

// Backend Mocks
export interface LoginOutput {
  auth_token: string | null;
  userDetails: UserDetails | null;
  statusCode: HttpStatusCode;
}

export function mimicBackendSignInAPI(
  username: string,
  password: string
): LoginOutput {
  let jwt: string = '';
  let userDetails: UserDetails;
  // Incase of Admin user
  if (username === 'admin' && password === 'password') {
    userDetails = { username, role: 'ADMIN' };
    jwt = generateToken(userDetails);
    return {
      auth_token: jwt,
      userDetails,
      statusCode: 200,
    };
  } else if (username === 'employee' && password === 'password') {
    userDetails = { username, role: 'USER' };
    jwt = generateToken(userDetails);
    return {
      auth_token: jwt,
      userDetails,
      statusCode: 200,
    };
  } else {
    return {
      auth_token: null,
      userDetails: null,
      statusCode: 401,
    };
  }
}
