import axios from "axios"
import { toast } from 'react-toastify';

const adapter = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: 'application/json;charset=UTF-8',
        Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDAwMDAwMDAxIiwiaWF0IjoxNjMzMTA1NDI2LCJleHAiOjE2MzMxMDY2MjZ9.vuCXpEGzsJ6UvQBn_uu6AW4eZDUxgd34PN3h2N9BGVi9iyrLDHOTLvy29B7AyA4bWsPDy9sDEPkVW3UfhUcOpw"
    },
});

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.interceptors.response.use(undefined, (error) => {
    const expectedErr =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
    if (!expectedErr) toast.error("unexpected error")
    return Promise.reject(error)
})

axios.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDAwMDAwMDAxIiwiaWF0IjoxNjMzMTA1NDI2LCJleHAiOjE2MzMxMDY2MjZ9.vuCXpEGzsJ6UvQBn_uu6AW4eZDUxgd34PN3h2N9BGVi9iyrLDHOTLvy29B7AyA4bWsPDy9sDEPkVW3UfhUcOpw"
function setJwt(jwt: string | null) {
    axios.defaults.headers.common['Authorization'] = { 'Authorization': `bearer ${jwt}` }
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
