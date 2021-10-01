import axios from "axios"
import { toast } from 'react-toastify';

const adapter = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: 'application/json;charset=UTF-8',
        Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDAwMDAwMDAxIiwiaWF0IjoxNjMzMTA5ODk2LCJleHAiOjE2MzMxMTEwOTZ9.5GhqBsLf5Vz6xKJ05BTLFAdMQWN_9Y0gFGztD-KpLW6m9qpzxvNeKbADUwG0jpGM-xPv6Pf51YOVHLPsxnAQZQ"
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

axios.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDAwMDAwMDAxIiwiaWF0IjoxNjMzMTA5ODk2LCJleHAiOjE2MzMxMTEwOTZ9.5GhqBsLf5Vz6xKJ05BTLFAdMQWN_9Y0gFGztD-KpLW6m9qpzxvNeKbADUwG0jpGM-xPv6Pf51YOVHLPsxnAQZQ"
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
