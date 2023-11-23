import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;
const apiEndPoint = `${process.env.REACT_APP_API_URL}students/get/districts`;

export function getDistricts(selectedProvince)
{
    return http.get(`${apiEndPoint}/${selectedProvince}`);
}
export default {
    getDistricts
}