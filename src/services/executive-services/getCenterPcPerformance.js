import http from '../httpService';
import apiConfig from '../../utils/config.json';

const apiEndPoint = `${apiConfig.apiUrl}executiveLevel/get/performanceChartDetailsInCenter`;
const apiEndPointForCircles = `${apiConfig.apiUrl}executiveLevel/get/centerPerformanceDetails`;

export function getSelectedCenterPCPerformance(centerId)
{
    console.log(`${apiEndPoint}/${centerId}`)
    return http.get(`${apiEndPoint}/${centerId}`);  
}
export function getSelectedCenterPCPerformanceForCircle(centerId)
{
    return http.get(`${apiEndPointForCircles}/${centerId}`);  
}

export default {
    getSelectedCenterPCPerformance,
    getSelectedCenterPCPerformanceForCircle
}

