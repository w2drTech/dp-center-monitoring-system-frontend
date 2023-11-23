import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;
const apiEndPoint = `${process.env.REACT_APP_API_URL}executiveLevel/get/studentAttendanceChatDetailsByDistrict`;
const apiEndPointForCircles = `${process.env.REACT_APP_API_URL}executiveLevel/get/studentAttendanceDetailsByDistrict`;

export function getSelectedDistrictAttendance(districtId)
{
    return http.get(`${apiEndPoint}/${districtId}`);  
}
export function getSelectedDistrictAttendanceForCircle(districtId)
{
    return http.get(`${apiEndPointForCircles}/${districtId}`);  
}

export default {
    getSelectedDistrictAttendance,
    getSelectedDistrictAttendanceForCircle
}
