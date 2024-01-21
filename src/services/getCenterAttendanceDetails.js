import http from './httpService';
import apiConfig from '../utils/config.json';

const apiEndPoint = `${apiConfig.apiUrl}executiveLevel/get/studentAttendanceChatDetailsByCenter`;
const apiEndPointForAllCenters = `${apiConfig.apiUrl}executiveLevel/get/allCenters`;
const apiEndPointForCircles = `${apiConfig.apiUrl}executiveLevel/get/studentAttendanceDetailsByCenter`;

export function getSelectedCenterAttendance(centerId)
{
    return http.get(`${apiEndPoint}/${centerId}`);  
}
export function getSelectedCenterAttendanceForCircle(centerId)
{
    return http.get(`${apiEndPointForCircles}/${centerId}`);  
}
export function getAllCenters()
{
    return http.get(apiEndPointForAllCenters);  
}
export default {
    getSelectedCenterAttendance,
    getSelectedCenterAttendanceForCircle
}