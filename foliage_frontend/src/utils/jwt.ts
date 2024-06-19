import {jwtDecode} from 'jwt-decode';
import 'core-js/stable/atob';

interface Payload {
  iss: string;
}

export const decodeJWT = (token: string) => {
  try {
    const decoded: Payload = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error('Failed to decode JWT: ', error);
    throw new Error('Invalid token');
  }
};
