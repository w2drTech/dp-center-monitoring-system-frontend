import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { getProvinces } from "../../data/provinceData";
import { getDistricts } from "../../data/districtData";
import LineChart from "../../components/LineChart";

const StudentAttendance = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [centers, setCenters] = useState([]);

  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [center, setCenter] = useState();

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };
  useEffect(() => {
    // const getProvincesFunc = async () => {
    //   const { data } = await getProvinces();
    //   const prov = data;
    //   setProvinces(prov);
    // };
    const provinces = getProvinces();
    setProvinces(provinces);

    const districts = getDistricts();
    setDistricts(districts);
  }, []);

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
              <InputLabel id="demo-simple-select-label">Province</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                label="Province"
                onChange={handleProvinceChange}
              >

                {provinces.map((province) => (
                  <MenuItem key={province.id} value={province.name}>
                    {province.name}
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
              <InputLabel id="demo-simple-select-label">District</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="District"
                onChange={handleDistrictChange}
              >
                {districts.map((district) => (
                  <MenuItem key={district.id} value={district.name}>
                    {district.name}
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
              <InputLabel id="demo-simple-select-label">District</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="District"
                onChange={handleDistrictChange}
              >
                {districts.map((district) => (
                  <MenuItem key={district.id} value={district.name}>
                    {district.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          gridColumn="span 12"
          height="380px"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box height="420px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentAttendance;
