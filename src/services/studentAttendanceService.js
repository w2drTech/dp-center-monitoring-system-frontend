import http from "./httpService";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl)
const apiEndPointForGetStudent = `${process.env.REACT_APP_API_URL}students/get/studentLogin`;
const apiEndpointForInsert = `${process.env.REACT_APP_API_URL}students/insert/student`;
const apiEndPointForMarkAttendance = `${process.env.REACT_APP_API_URL}students/insert/student/attendanceIn`;
const apiEndPointForUpdateAttendance = `${process.env.REACT_APP_API_URL}students/update/student/attendanceOut`;

export function getStudent(email) {
  return http.get(`${apiEndPointForGetStudent}/${email}`);
}
export function registerStudent(student) {

  return http.post(apiEndpointForInsert, {
    studentName: student.name,
    email: student.email,
    centerCode: student.center,
    phoneNumber: student.phone,
    parentPhoneNumber: student.guardianPhone,
    address: student.address,
  });
}
export function markAttendance(attendance) {

console.log(attendance);
  return http.post(apiEndPointForMarkAttendance, {
    email: attendance.email,
    pcCode: attendance.pcId,
  });
}
export function updateAttendance(attendanceKey) {
    return http.put(apiEndPointForUpdateAttendance, {
        attendanceCode: attendanceKey,
    });
  }
export default {
  getStudent,
  registerStudent,
  markAttendance
};
