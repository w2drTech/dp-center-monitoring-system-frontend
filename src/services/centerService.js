import http from './httpService';

import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndPoint = `${process.env.REACT_APP_API_URL}students/get/centers`;
export function getCenters(selectedDistrict)
{
    return http.get(`${apiEndPoint}/${selectedDistrict}`);
}