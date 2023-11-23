import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;
const apiEndPoint = `${process.env.REACT_APP_API_URL}executiveLevel/get/studentAttendanceChatDetailsByCenter`;
const apiEndPointForCircles = `${process.env.REACT_APP_API_URL}executiveLevel/get/studentAttendanceDetailsByCenter`;

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