import http, { header } from '../../http/httpConfig';
import { DepositRequestBody, TransactionResponse, WithdrawRequestBody, } from './model/NewAccountReqResModel';

const apiUrl = '';

export async function getAccountStatement(getUsersRequestBody: any) {
  return await http.post(`${apiUrl}/account_statement`, { ...getUsersRequestBody }, { headers: { ...header } });
}

export async function deposit(depositRequestBody: DepositRequestBody): Promise<TransactionResponse> {
  return await http.post(`${apiUrl}/deposit`, { ...depositRequestBody }, { headers: { ...header } });
}

export async function withdraw(withdrawRequestBody: WithdrawRequestBody): Promise<TransactionResponse> {
  return await http.post(`${apiUrl}/withdrawal`, { ...withdrawRequestBody }, { headers: { ...header } });
}

