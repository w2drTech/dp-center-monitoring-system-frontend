import http from './httpService';
import apiConfig from '../utils/config.json';

const apiEndPoint = `${apiConfig.apiUrl}executiveLevel/get/studentAttendanceChatDetailsByDistrict`;
const apiEndPointForCircles = `${apiConfig.apiUrl}executiveLevel/get/studentAttendanceDetailsByProvince`;

export function getSelectedDistrictAttendance(districtId)
{
    return http.get(`${apiEndPoint}/${districtId}`);  
}
// export function getSelectedDistrictAttendanceForCircle(provinceId)
// {
//     return http.get(`${apiEndPointForCircles}/${provinceId}`);  
// }

export default {
    getSelectedDistrictAttendance,
    //getSelectedDistrictAttendanceForCircle
}
