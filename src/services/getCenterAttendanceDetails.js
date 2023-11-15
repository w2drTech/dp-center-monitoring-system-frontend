import http from './httpService';
import apiConfig from '../utils/config.json';

const apiEndPoint = `${apiConfig.apiUrl}executiveLevel/get/studentAttendanceChatDetailsByCenter`;
const apiEndPointForCircles = `${apiConfig.apiUrl}executiveLevel/get/studentAttendanceDetailsByCenter`;

export function getSelectedCenterAttendance(centerId)
{
    console.log(`${apiEndPoint}/${centerId}`)
    return http.get(`${apiEndPoint}/${centerId}`);  
}
export function getSelectedCenterAttendanceForCircle(centerId)
{
    return http.get(`${apiEndPointForCircles}/${centerId}`);  
}

export default {
    getSelectedCenterAttendance,
    getSelectedCenterAttendanceForCircle
}