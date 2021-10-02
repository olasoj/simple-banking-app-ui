import { NewAccountRequestBody, AccountInfoResponseBody } from './model/AccountReqResModel';
import http, { header } from '../../http/httpConfig';

const apiUrl = '/account';

export async function getAccountInfo(): Promise<AccountInfoResponseBody> {
  return await http.get(`${apiUrl}/info/me`, { headers: { ...header } });
}

export async function createAccount(newAccountRequestBody: NewAccountRequestBody) {
  return await http.post(`${apiUrl}/create`, { ...newAccountRequestBody }, { headers: { ...header } });
}

