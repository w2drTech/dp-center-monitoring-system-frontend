import http from '../httpService';
import apiConfig from '../../utils/config.json';

const apiEndPoint = `${apiConfig.apiUrl}executiveLevel/get/CenterWithPerformanceAnyDate`;
const apiEndPointForTable = `${apiConfig.apiUrl}executiveLevel/get/PCsPerformanceInTable`
export function getSelectedCenterPerformance(centerCode,openDate,status)
{
    return http.post(apiEndPoint,{
        centerCode: centerCode,
        openDate: openDate,
        status:status
    });  
}

export function getSelectedCenterPCDetails(centerCode,openDate)
{
    console.log(centerCode,openDate)
    return http.post(apiEndPointForTable,{
        centerCode: centerCode,
        openDate: openDate,
        
    });  
}



export default {
    getSelectedCenterPerformance,
    getSelectedCenterPCDetails
}
