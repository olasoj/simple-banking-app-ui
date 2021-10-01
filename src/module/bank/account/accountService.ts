import http, { header } from '../../http/httpConfig';

const apiUrl = '/';

export async function getAccountInfo(getUsersRequestBody: any) {
  return await http.get(`${apiUrl}/account_info`, { headers: { ...header } });
}

export async function createAccount(getAddUserRequestBody: any) {
  return await http.post(`${apiUrl}/create_account`, { ...getAddUserRequestBody }, { headers: { ...header } });
}

