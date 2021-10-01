import { NewAccountResponse, NewAccountRequestBody, AccountInfoResponseBody } from './model/NewAccountReqResModel';
import http, { header } from '../../http/httpConfig';

const apiUrl = '';

export async function getAccountInfo(): Promise<AccountInfoResponseBody> {
  return await http.get(`${apiUrl}/account_info/0000000001`, { headers: { ...header } });
}

export async function createAccount(newAccountRequestBody: NewAccountRequestBody): Promise<NewAccountResponse> {
  return await http.post(`${apiUrl}/create_account`, { ...newAccountRequestBody }, { headers: { ...header } });
}

