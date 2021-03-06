import axios from "axios"
import { toast } from 'react-toastify';

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.interceptors.response.use(undefined, (error) => {
    const expectedErr =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
    if (!expectedErr) toast.error("unexpected error occurred")
    if (error.response === 401) toast.error("Session expired; log out and log back in")
    return Promise.reject(error)
})

function setJwt(jwt: string | null) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}

export const header = {
    "Content-Type": "application/json"
}

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
}
export default http
