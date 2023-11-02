import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LineChart from "../../components/LineChart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getStatBoxData } from "../../services/statboxDataService";

const ExecutiveLevelDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [todayStudent, setTodayStudent] = useState("");
  const [allRegisteredStudents, setAllRegisteredStudents] = useState("");
  const [allRegisteredCenters, setAllRegisteredCenters] = useState("");
  const [workingStudent, setWorkingStudents] = useState("");
  const [workingCenters, setWorkingCenters] = useState("");
  const [computerHour, setComputerHours] = useState("");
  useEffect(() => {
    const fetchStatBoxData = async () => {
      try {
        const response = await getStatBoxData();
        setTodayStudent(response.data.dailyStudentCount);
        setWorkingStudents(response.data.currentStudentCount);
        setWorkingCenters(response.data.dailyCenterCount);
        setComputerHours(response.data.dailyComputerHours)
        setAllRegisteredStudents(response.data.allStudentCount);
        setAllRegisteredCenters(response.data.allCenterCount);
      } catch (error) {
        toast.error("Error fetching data");
      }
    };
    fetchStatBoxData();
  }, []);

  return (
    <Box m="0 20px">
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name = "todayStudent"
            title="Today Students"
            progress="0.85"
            value={todayStudent}
            fullStudentValue={allRegisteredStudents}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          name = "liveStudent"
            title="Live Working Students"
            progress="0.75"
            value={workingStudent}
            fullStudentValue={allRegisteredStudents}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name = "liveCenters"
            title="Live Working Centers"
            progress="0.50"
            value={workingCenters}
            fullStudentValue={allRegisteredCenters}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            name = "computerHours"
            title="Today Computer Hours"
            progress="0.30"
            value={computerHour}
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box height="350px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExecutiveLevelDashboard;
