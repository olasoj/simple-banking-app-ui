import { NewAccountResponse, NewAccountRequestBody } from './model/NewAccountRequestModel';
import http, { header } from '../../http/httpConfig';

const apiUrl = '';

export async function getAccountInfo(getUsersRequestBody: any) {
  return await http.get(`${apiUrl}/account_info`, { headers: { ...header } });
}

export async function createAccount(newAccountRequestBody: NewAccountRequestBody): Promise<NewAccountResponse> {
  return await http.post(`${apiUrl}/create_account`, { ...newAccountRequestBody }, { headers: { ...header } });
}

