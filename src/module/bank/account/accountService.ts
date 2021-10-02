import { NewAccountResponse, NewAccountRequestBody, AccountInfoResponseBody } from './model/NewAccountReqResModel';
import http, { header } from '../../http/httpConfig';

const apiUrl = '/account';

export async function getAccountInfo(): Promise<AccountInfoResponseBody> {
  return await http.get(`${apiUrl}/info/me`, { headers: { ...header } });
}

export async function createAccount(newAccountRequestBody: NewAccountRequestBody): Promise<NewAccountResponse> {
  return await http.post(`${apiUrl}/create`, { ...newAccountRequestBody }, { headers: { ...header } });
}

