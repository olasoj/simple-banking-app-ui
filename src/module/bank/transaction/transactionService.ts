import http, { header } from '../../http/httpConfig';

const apiUrl = '/';

export async function getAccountStatement(getUsersRequestBody: any) {
  return await http.post(`${apiUrl}/account_statement`, { ...getUsersRequestBody }, { headers: { ...header } });
}

export async function deposit() {
  return await http.get(`${apiUrl}/deposit`, { headers: { ...header } });
}

export async function withdraw(getAddUserRequestBody: any) {
  return await http.post(`${apiUrl}/withdrawal`, { ...getAddUserRequestBody }, { headers: { ...header } });
}

