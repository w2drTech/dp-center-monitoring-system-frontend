import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;
const apiEndPoint = `${process.env.REACT_APP_API_URL}executiveLevel/get/homeDetails`;

export function getStatBoxData()
{
    return http.get(`${apiEndPoint}`);
}
export default {
    getStatBoxData
}