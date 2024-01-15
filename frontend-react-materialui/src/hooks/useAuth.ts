import { BrowserStorageService } from '../services/browser_storage_service';
import {
  getExpirationDecoded,
  getUserDetailsDecoded,
  verifyToken,
} from '../services/token_service';

/**
 * This is an hook which  verifies the token performs multiple operations
 * 1. It checks if the user is logged in or not
 * 2. Once Time expired and then the user wants to navigate, it sets the auth_token to null. So he will not be able to login
 * @returns
 */
export const useAuth = () => {
  let userLoggedIn = false;
  const accessToken = BrowserStorageService.get('token', 'auth');
  if (accessToken) {
    userLoggedIn = true;
    const decoded = verifyToken(accessToken);
    const userDetails = getUserDetailsDecoded(decoded);
    if (!userDetails) {
      userLoggedIn = false;
    } else if (getExpirationDecoded(decoded) * 1000 < Date.now()) {
      BrowserStorageService.put('token', null, 'auth');
      userLoggedIn = false;
    }
  }

  return userLoggedIn;
};
