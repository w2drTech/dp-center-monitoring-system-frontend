import Maintenance from "../../global/Maintenance";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

import LineChart from "../../../components/LineChart";
import { toast } from "react-toastify";
import { getProvinces } from "../../../services/areaService";
import { getDistricts } from "../../../services/districtService";
import { getCenters } from "../../../services/centerService";

import "../../../../src/style.css";
import StatBox from "../../../components/StatBox";
import {
  getSelectedProvinceAttendance,
  getSelectedProvinceAttendanceForCircle,
} from "../../../services/getDistrictAttendance";
import { getStatBoxData } from "../../../services/statboxDataService";
import {
  getSelectedDistrictAttendance,
  getSelectedDistrictAttendanceForCircle,
} from "../../../services/getCenterAttendanceForSelectedDistrict";
import {
  getSelectedCenterAttendance,
  getSelectedCenterAttendanceForCircle,
} from "../../../services/getCenterAttendanceDetails";
import {
  getLineChartDataForPCPerformance,
  getPCPerformanceStatBoxData,
} from "../../../services/executive-services/pcPerformanceService";
import {
  getSelectedProvincePCPerformance,
  getSelectedProvincePCPerformanceForCircle,
} from "../../../services/executive-services/getProvincePcPerformance";
import {
  getSelectedDistrictPCPerformance,
  getSelectedDistrictPCPerformanceForCircle,
} from "../../../services/executive-services/getDistrictPcPerformance";
import {
  getSelectedCenterPCPerformance,
  getSelectedCenterPCPerformanceForCircle,
} from "../../../services/executive-services/getCenterPcPerformance";

const PCWorkHours = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [centers, setCenters] = useState([]);

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [center, setCenter] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  var [loading, setLoading] = useState(true);
  const [lineChartData, setLineChartData] = useState([]);
  const [allPCCount, setAllPCs] = useState("");
  const [todayWorkingPCs, setTodayWorkingPCs] = useState("");
  const [currentWorkingPCs, setCurrentWorkingPCs] = useState("");

  const handleProvinceChange = async (event) => {
    setProvince(event.target.value);

    const responseOfCircleData =
      await getSelectedProvincePCPerformanceForCircle(event.target.value);

    setAllPCs(responseOfCircleData.data.allPcCount);
    setTodayWorkingPCs(responseOfCircleData.data.todayWorkingPCs);
    setCurrentWorkingPCs(responseOfCircleData.data.currentWorkingPCs);

    const response = await getSelectedProvincePCPerformance(event.target.value);

    const districtArrays = {};

    response.data.forEach((item) => {
      const district = item.district;
      if (!districtArrays[district]) {
        districtArrays[district] = {
          id: district.toLowerCase(), // Convert district name to lowercase for the id
          color: tokens("dark").greenAccent[500], // Function to get a random HSL color
          data: [],
        };
      } // Push the current item to the corresponding district array
      districtArrays[district].data.push({
        x: item.date,
        y: item.performance,
      });
    });

    const allUniqueDates = Array.from(
      new Set(response.data.map((item) => item.date))
    );
    Object.values(districtArrays).forEach((district) => {
      const districtDates = district.data.map((dataPoint) => dataPoint.x);

      allUniqueDates.forEach((date) => {
        if (!districtDates.includes(date)) {
          district.data.push({
            x: date,
            y: 0,
          });
        }
      });
      district.data.sort((a, b) => {
        const dateA = allUniqueDates.indexOf(a.x);
        const dateB = allUniqueDates.indexOf(b.x);
        return dateA - dateB;
      });
      // Sort the data array by date
      //district.data.sort((a, b) => a.x - b.x);
    });
    const uniqueDistrictIDs = Object.keys(districtArrays);

    // Define an array of colors for each district dynamically
    const districtColors = {};
    uniqueDistrictIDs.forEach((districtID, index) => {
      districtColors[districtID] =
        tokens("dark").greenAccent[500 + index * 100];
      // Adjust the color generation as needed
    });

    // Function to generate a random HSL color
    function getRandomColor() {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 70%, 50%)`;
    }

    // Use districtColors for each district array in districtArrays
    Object.values(districtArrays).forEach((district) => {
      district.color = districtColors[district.id] || getRandomColor();
    });
    // Convert the object to an array of values
    const resultArray = Object.values(districtArrays);
    setLineChartData(resultArray);
  };
  const handleDistrictChange = async (event) => {
    setDistrict(event.target.value);
    const responseOfCircleData =
      await getSelectedDistrictPCPerformanceForCircle(event.target.value);
    setAllPCs(responseOfCircleData.data.allPcCount);
    setTodayWorkingPCs(responseOfCircleData.data.todayWorkingPCs);
    setCurrentWorkingPCs(responseOfCircleData.data.currentWorkingPCs);
    const response = await getSelectedDistrictPCPerformance(event.target.value);
    const centersArray = {};

    response.data.forEach((item) => {
      const center = item.centerName;

      if (!centersArray[center]) {
        centersArray[center] = {
          id: center.toLowerCase(), // Convert center name to lowercase for the id
          color: tokens("dark").greenAccent[500], // Function to get a random HSL color
          data: [],
        };
      } // Push the current item to the corresponding center array
      centersArray[center].data.push({
        x: item.date,
        y: item.performance,
      });
    });
    const allUniqueDates = Array.from(
      new Set(response.data.map((item) => item.date))
    );
    // Step 2: Ensure each district has data for all unique dates
    Object.values(centersArray).forEach((district) => {
      const districtDates = district.data.map((dataPoint) => dataPoint.x);

      allUniqueDates.forEach((date) => {
        if (!districtDates.includes(date)) {
          district.data.push({
            x: date,
            y: 0,
          });
        }
      });
      district.data.sort((a, b) => {
        const dateA = allUniqueDates.indexOf(a.x);
        const dateB = allUniqueDates.indexOf(b.x);
        return dateA - dateB;
      });
      // Sort the data array by date
      //district.data.sort((a, b) => a.x - b.x);
    });
    const uniqueDistrictIDs = Object.keys(centersArray);

    // Define an array of colors for each district dynamically
    const districtColors = {};
    uniqueDistrictIDs.forEach((districtID, index) => {
      districtColors[districtID] =
        tokens("dark").greenAccent[500 + index * 100];
      // Adjust the color generation as needed
    });

    // Function to generate a random HSL color
    function getRandomColor() {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 70%, 50%)`;
    }

    // Use districtColors for each district array in districtArrays
    Object.values(centersArray).forEach((district) => {
      district.color = districtColors[district.id] || getRandomColor();
    });
    // Convert the object to an array of values
    const resultArray = Object.values(centersArray);
    setLineChartData(resultArray);
  };
  const handleCenterChange = async (event) => {
    setCenter(event.target.value);
    const responseOfCircleData = await getSelectedCenterPCPerformanceForCircle(
      event.target.value
    );
    setAllPCs(responseOfCircleData.data.allPcCount);
    setTodayWorkingPCs(responseOfCircleData.data.todayWorkingPCs);
    setCurrentWorkingPCs(responseOfCircleData.data.currentWorkingPCs);

    const response = await getSelectedCenterPCPerformance(event.target.value);
    const chartDataForCenter = [
      {
        id: "PC Work Hours",
        color: tokens("dark").greenAccent[500],
        data: response.data,
      },
    ];
    setLineChartData(chartDataForCenter);
  };
  useEffect(() => {
    const fetchLineChartData = async () => {
      try {
        const response = await getPCPerformanceStatBoxData();
        setAllPCs(response.data.allPcCount);
        setTodayWorkingPCs(response.data.todayWorkingPCs);
        setCurrentWorkingPCs(response.data.currentWorkingPCs);

        const lineChartDataResponse = await getLineChartDataForPCPerformance();
        const chartData = [
          {
            id: "PC Work Hours",
            color: tokens("dark").greenAccent[500],
            data: lineChartDataResponse.data,
          },
        ];

        setLineChartData(chartData);
      } catch (error) {
        toast.error("Error fetching data");
      }
    };
    fetchLineChartData().then(() => setLoading((loading = false)));
  }, []);
  useEffect(() => {
    const fetchProvinceData = async () => {
      try {
        const response = await getProvinces();
        setProvinces(response.data);
      } catch (error) {
        toast.error("Error fetching data");
      }
    };
    fetchProvinceData();
  }, []);
  useEffect(() => {
    const fetchDistrictData = async () => {
      if (selectedProvince) {
        try {
          const response = await getDistricts(selectedProvince); // You'll need a function to fetch districts based on the selected province
          setDistricts(response.data); // Assuming response is an array of districts
        } catch (error) {
          toast.error("Error fetching data");
        }
      }
    };

    fetchDistrictData();
  }, [selectedProvince]);
  useEffect(() => {
    const fetchCenterData = async () => {
      if (selectedProvince) {
        try {
          const response = await getCenters(selectedDistrict); // You'll need a function to fetch districts based on the selected province
          setCenters(response.data); // Assuming response is an array of districts
        } catch (error) {
          toast.error("Error fetching data");
        }
      }
    };

    fetchCenterData();
  }, [selectedDistrict]);
  if (loading) {
    return <div id="cover-spin"></div>;
  }
  return (
    <Box m="0 20px">
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="70px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="province">Province</InputLabel>
              <Select
                variant="filled"
                fullWidth
                id="province"
                name="province"
                type="text"
                defaultValue=""
                required
                onChange={(e) => {
                  setSelectedProvince(e.target.value); // Update selected province when changed
                  handleProvinceChange(e); // Handle other form changes
                }}
              >
                {provinces.map((province) => (
                  <MenuItem
                    key={province.provinceId}
                    value={province.provinceId}
                  >
                    {province.provinceName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="district">District</InputLabel>
              <Select
                variant="filled"
                fullWidth
                id="district"
                name="district"
                type="text"
                defaultValue=""
                required
                onChange={(e) => {
                  setSelectedDistrict(e.target.value); // Update selected province when changed
                  handleDistrictChange(e); // Handle other form changes
                }}
              >
                {districts.map((district) => (
                  <MenuItem
                    key={district.districtId}
                    value={district.districtId}
                  >
                    {district.districtName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="center">Center</InputLabel>
              <Select
                variant="filled"
                fullWidth
                id="center"
                name="center"
                type="text"
                defaultValue=""
                required
                onChange={(e) => {
                  handleCenterChange(e); // Handle other form changes
                }}
              >
                {centers.map((center) => (
                  <MenuItem key={center.centerCode} value={center.centerCode}>
                    {center.centerName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        display="grid"
        justifyContent="space-between"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="10px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Box>
        <Box
          gridColumn="span 5"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name="todayStudent"
            title="Today PCs"
            progress={`${(todayWorkingPCs / allPCCount) * 100 || 0.0}`}
            value={todayWorkingPCs}
            fullStudentValue={allPCCount}
          />
        </Box>
        <Box
          gridColumn="span 5"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name="todayStudent"
            title="Live Working PCs"
            progress={`${(currentWorkingPCs / todayWorkingPCs) * 100 || 0.0}`}
            value={currentWorkingPCs}
            fullStudentValue={todayWorkingPCs}
          />
        </Box>
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Box>
        <Box
          gridColumn="span 12"
          height="490px"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box height="520px" m="-20px 0 0 0">
            <LineChart
              isDashboard={true}
              data={lineChartData}
              leftAxisName="PC Work Hours (%)"
              bottomAxisName="Date"
              area={false}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PCWorkHours;
