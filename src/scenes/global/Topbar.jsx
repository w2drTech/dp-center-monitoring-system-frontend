import {
  Box,
  Button,
  IconButton,
  Modal,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import {
  AlarmAddOutlined,
  AlarmOffOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import {
  setCenterEnd,
  setCenterStart,
} from "../../services/center-manager-services/centeroperatinghoursService";
import { toast } from "react-toastify";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ipinfo.io?token=151a5062f7d8bc");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setUser(localStorage.getItem("Role"));
    setName(localStorage.getItem("UserName"));
    setStatus(localStorage.getItem("Status") === "NULL" ? "Start" : "End");
  }, []);

  const handleCenterLogout = async () => {
    try {
      const attendanceCode = localStorage.getItem("Status");
      const centerId = localStorage.getItem("CenterCode");
      const response = await setCenterEnd(attendanceCode, centerId);
      localStorage.setItem("Status", "NULL");
      toast.success("Successfully end the center");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box>
        {user === "CIC" ? (
          <Header
            title="DASHBOARD"
            subtitle={`Hello! ${name}, Welcome to your dashboard`}
            ipAddress={`Your IP : ${ipAddress}`}
          />
        ) : (
          <Header
            title="DASHBOARD"
            subtitle={`Hello! Welcome to your dashboard`}
          />
        )}
      </Box>
      <Box>
        {user === "CIC" && status === "Start" ? (
          <Tooltip title={`${status} The Center`} arrow>
            <IconButton
              onClick={async () => {
                try {
                  const userId = localStorage.getItem("User");
                  const centerId = localStorage.getItem("CenterCode");
                  const response = await setCenterStart(userId, centerId);
                  if (
                    response.data.o_sql_msg ===
                    "CENTER IN CHARGE ALREADY INSERTED LOGIN TIME"
                  ) {
                    setStatus("End");
                    console.log(response.data.centerInChargeAttendanceCode);
                    localStorage.setItem(
                      "Status",
                      response.data.centerInChargeAttendanceCode
                    );
                    setStatus("End");
                  } else if (response.data.o_sql_msg === "success") {
                    localStorage.setItem(
                      "Status",
                      response.data.centerInChargeAttendanceCode
                    );
                    setStatus("End");
                    toast.success("Successfully Marked The Attendance.");
                  }

                  console.log(response);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <AlarmAddOutlined />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title={`${status} The Center`} arrow>
            <IconButton onClick={handleOpen} disabled={user !== "CIC"}>
              <AlarmOffOutlined />
            </IconButton>
          </Tooltip>
        )}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <Tooltip title={"Logout"} arrow>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <IconButton
              onClick={() => {
                localStorage.removeItem("Role");
                localStorage.removeItem("CenterCode");
                localStorage.removeItem("User");
                localStorage.removeItem("Status");
                window.location.replace("/");
              }}
            >
              <LogoutOutlined />
            </IconButton>
          </Link>
        </Tooltip>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Are you closing the center?
          </Typography>
          <Box display="flex" justifyContent="space-around" marginTop="30px">
            <Button
              variant="contained"
              type="submit"
              onClick={handleCenterLogout}
              style={{
                backgroundColor: "red",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "white",
                fontSize: "15px",
                marginBottom: "10px",
                color: "red",
              }}
              onClick={handleClose}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Topbar;
