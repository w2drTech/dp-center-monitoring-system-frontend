import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LineChart from "../../components/LineChart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getStatBoxData } from "../../services/statboxDataService";

import "../../../src/style.css";
import { getExecutiveDashboardLineChartData } from "../../services/lineChartDataService";

const ExecutiveLevelDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [todayStudent, setTodayStudent] = useState("");
  const [allRegisteredStudents, setAllRegisteredStudents] = useState("");
  const [allRegisteredCenters, setAllRegisteredCenters] = useState("");
  const [workingStudent, setWorkingStudents] = useState("");
  const [workingCenters, setWorkingCenters] = useState("");
  const [computerHour, setComputerHours] = useState("");
  const [lineChartData, setLineChartData] = useState("");
  var [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStatBoxData = async () => {
      try {
        const response = await getStatBoxData();
        const lineChartDataResponse =
          await getExecutiveDashboardLineChartData();
        setTodayStudent(response.data.dailyStudentCount);
        setWorkingStudents(response.data.currentStudentCount);
        setWorkingCenters(response.data.dailyCenterCount);
        setComputerHours(response.data.dailyComputerHours);
        setAllRegisteredStudents(response.data.allStudentCount);
        setAllRegisteredCenters(response.data.allCenterCount);
        const chartData = [
          {
            id: "Total Student",
            color: tokens("dark").greenAccent[500],
            data: lineChartDataResponse.data,
          },
        ];
        setLineChartData(chartData);
      } catch (error) {
        toast.error("Error fetching data");
      }
    };
    fetchStatBoxData().then(() => setLoading((loading = false)));
  }, []);
  if (loading) {
    return <div id="cover-spin"></div>;
  }
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
            name="todayStudent"
            title="Today Students"
            progress={`${(todayStudent / allRegisteredStudents) * 100}`}
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
            name="liveStudent"
            title="Live Working Students"
            progress={`${(workingStudent / allRegisteredStudents) * 100}`}
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
            name="liveCenters"
            title="Live Working Centers"
            progress={`${(workingCenters / allRegisteredCenters) * 100}`}
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
            name="computerHours"
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
            <LineChart
              isDashboard={true}
              data={lineChartData}
              leftAxisName="Student Count"
              bottomAxisName="Date"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExecutiveLevelDashboard;
