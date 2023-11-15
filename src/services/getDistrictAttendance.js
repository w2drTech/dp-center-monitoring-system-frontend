import http from './httpService';
import apiConfig from '../utils/config.json';

const apiEndPoint = `${apiConfig.apiUrl}executiveLevel/get/studentAttendanceChatDetailsByProvince`;
const apiEndPointForCircles = `${apiConfig.apiUrl}executiveLevel/get/studentAttendanceDetailsByProvince`;

export function getSelectedDistrictAttendance(provinceId)
{
    return http.get(`${apiEndPoint}/${provinceId}`);  
}
export function getSelectedDistrictAttendanceForCircle(provinceId)
{
    return http.get(`${apiEndPointForCircles}/${provinceId}`);  
}

export default {
    getSelectedDistrictAttendance,
    getSelectedDistrictAttendanceForCircle
}
