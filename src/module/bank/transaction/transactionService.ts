import http, { header } from '../../http/httpConfig';
import { TransactionResponse, WithdrawRequestBody } from './model/NewAccountReqResModel';

const apiUrl = '';

export async function getAccountStatement(getUsersRequestBody: any) {
  return await http.post(`${apiUrl}/account_statement`, { ...getUsersRequestBody }, { headers: { ...header } });
}

export async function deposit() {
  return await http.get(`${apiUrl}/deposit`, { headers: { ...header } });
}

export async function withdraw(getAddUserRequestBody: WithdrawRequestBody): Promise<TransactionResponse> {
  return await http.post(`${apiUrl}/withdrawal`, { ...getAddUserRequestBody }, { headers: { ...header } });
}

