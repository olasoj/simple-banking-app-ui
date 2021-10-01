import http, { header } from '../http/httpConfig';
import jwtDecode from 'jwt-decode';
import { LoginSchema } from './module/AuthReqResModel';


//get the url for users
const apiUrl = '/login';

const tokenKey = 'token';

export async function login(data: LoginSchema) {
  const { data: { accessToken } }: Res = await http.post(apiUrl, { ...data }, { headers: { ...header } });
  localStorage.setItem(tokenKey, accessToken);
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

interface Res {
  data: {
    accessToken: string
  }
}