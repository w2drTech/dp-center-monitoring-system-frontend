import apiConfig from "../../utils/config.json";
import httpService from "../httpService";

const apiEndPoint = `${apiConfig.apiUrl}centerInCharge/update/student/logOutAllStudentInCenter`;
export function putLogoutAllStudents(centerId) {
  return httpService.put(`${apiEndPoint}/${centerId}`);
}

export default {
  putLogoutAllStudents,
};
