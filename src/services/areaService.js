import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;
const apiEndPoint = `${process.env.REACT_APP_API_URL}students/get/provinces`;

export function getProvinces()
{
    return http.get(apiEndPoint)  
}

export default {
    getProvinces,
}