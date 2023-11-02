import http from './httpService';
import apiConfig from '../utils/config.json';

const apiEndPoint = `${apiConfig.apiUrl}executiveLevel/get/homeChartDetails`;

export function getExecutiveDashboardLineChartData()
{
    return http.get(`${apiEndPoint}`);
}
export default {
    getExecutiveDashboardLineChartData
}