import { Box, Button } from "@mui/material";
import { allLogout } from "../../services/super-admin/allLogoutService";
import { toast } from "react-toastify";

const SuperAdminDashboard = () => {
  const handleLogout = async () => {
    try {
      const response = await allLogout();
      if (response.data.o_sql_msg === "success") {
        toast.success("Successfully logged out all students");
      }
    } catch (error) {
      toast.error("Something went wrong while logging out all students");
    }
  };
  return (
    <Box>
      <Button
        variant="contained"
        color="success"
        sx={{
          width: "200px",
          height: "60px",
          fontSize: "25px",
          margin: "50px",
        }}
        onClick={handleLogout}
      >
        Click Me
      </Button>
    </Box>
  );
};

export default SuperAdminDashboard;
