import http from './httpService';
import apiUrl from '../utils/config.json';

const apiEndPoint = `${apiUrl}/student-attendance`;

export function getStudent(email,pcId)
{
    return http.get(`${apiEndPoint}?email=${email}&pcId=${pcId}`);
}

export default {
    getStudent
}