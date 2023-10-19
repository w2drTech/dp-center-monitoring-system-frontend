import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LineChart from "../../components/LineChart";

const ExecativeLevelDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box m="20px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12,1fr"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* Row 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Total Students"
              progress="0.75"
              icon={
                <AccessibilityIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
            <StatBox
              title="Total Students"
              progress="0.75"
              icon={
                <AccessibilityIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
            <StatBox
              title="Total Students"
              progress="0.75"
              icon={
                <AccessibilityIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="280px" mt="-20px">
              <LineChart isDashboard={false} />
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default ExecativeLevelDashboard;
