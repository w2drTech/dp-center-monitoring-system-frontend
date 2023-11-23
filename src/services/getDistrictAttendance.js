import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;
const apiEndPoint = `${process.env.REACT_APP_API_URL}executiveLevel/get/studentAttendanceChatDetailsByProvince`;
const apiEndPointForCircles = `${process.env.REACT_APP_API_URL}executiveLevel/get/studentAttendanceDetailsByProvince`;

export function getSelectedProvinceAttendance(provinceId)
{
    return http.get(`${apiEndPoint}/${provinceId}`);  
}
export function getSelectedProvinceAttendanceForCircle(provinceId)
{
    return http.get(`${apiEndPointForCircles}/${provinceId}`);  
}

export default {
    getSelectedProvinceAttendance,
    getSelectedProvinceAttendanceForCircle
}
