import http, { header } from '../../http/httpConfig';
import { DepositRequestBody, TransactionResponse, WithdrawRequestBody, } from './model/TransactionReqResModel';

const apiUrl = '';

export async function getAccountStatement() {
  return await http.get(`${apiUrl}/account_statement/0000000001`, { headers: { ...header } });
}

export async function deposit(depositRequestBody: DepositRequestBody): Promise<TransactionResponse> {
  return await http.post(`${apiUrl}/deposit`, { ...depositRequestBody }, { headers: { ...header } });
}

export async function withdraw(withdrawRequestBody: WithdrawRequestBody): Promise<TransactionResponse> {
  return await http.post(`${apiUrl}/withdrawal`, { ...withdrawRequestBody }, { headers: { ...header } });
}

