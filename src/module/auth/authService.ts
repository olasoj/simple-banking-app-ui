import http, { header } from '../http/httpConfig';
import jwtDecode from 'jwt-decode';
import { string } from 'yup/lib/locale';


//get the url for users
const apiUrl = '/auth';

const tokenKey = 'token';

export async function login(email: string, password: string) {
  const { data: { jwt } }: typeof Res = await http.post(apiUrl, { email, password }, { headers: { ...header } });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt: string) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

http.setJwt(getJwt());


export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return (jwt) ? jwtDecode(jwt) : null;
  } catch (err) {
    return null;
  }
}
export function getJwt() {
  try {
    return localStorage.getItem(tokenKey);
  } catch (err) {
    return null;
  }
}

export function checkIfIsAdmin() {
  try {
    const jwt: string | null = localStorage.getItem(tokenKey);
    const user: typeof User | null = (jwt) ? jwtDecode(jwt) : null;
    return (user) ? user.isAdmin : false;
  } catch (err) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
  checkIfIsAdmin
};

const User = {
  isAdmin: true
}

const Res = {
  data: {
    jwt: typeof string
  }
}