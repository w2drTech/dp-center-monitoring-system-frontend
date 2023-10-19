import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SidebarComponent from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import SignInSide from "./scenes/login/login";
import StudentAttendanceInterface from "./scenes/student-attendance-interface";
import Carousel from "./scenes/student-attendance-interface";
import { countries } from "./scenes/student-attendance-interface/data";
import HomeComponent from "./scenes/student-attendance-interface/homeComponent";
import ExecativeLevelDashboard from "./scenes/execative-level-dashboard";
import LineChart from "./components/LineChart";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
function App() {
  const [theme, colorMode] = useMode();
  const images = [
    "../../assets/1.jpg",
    "../../assets/2.jpg",
    "../../assets/3.jpg",
    // Add more image URLs as needed
  ];
  const test = "Execative";
  const menuItems = [
    {
      title: "Dashboard",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Center Details",
      icon: <SchoolOutlinedIcon />,
      subItems: [
        {
          title: "Student Attendance Details",
          to: "/menu-5",
          icon: <HowToRegOutlinedIcon />,
        },
        {
          title: "PC Work Hours Details",
          to: "/menu-5",
          icon: <ComputerOutlinedIcon />,
        },
      ],
    },
    {
      title: "Project Wise Details",
      icon: <ChecklistRtlOutlinedIcon />,
      subItems: [
        {
          title: "Opened Projects",
          to: "/menu-5",
          icon: <FileOpenOutlinedIcon />,
        },
        {
          title: "Completed Projects",
          to: "/menu-5",
          icon: <RuleOutlinedIcon />,
        },
      ],
    },
    {
      title: "Top Performance Ceners",
      to: "/menu-2",
      icon: <TrendingUpOutlinedIcon />,
    },
  ];
  const menuItems2 = [
    {
      title: "Aa",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Tables",
      to: "/menu-1",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Menu 2",
      to: "/menu-2",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Charts",
      icon: <HomeOutlinedIcon />,
      subItems: [
        {
          title: "Menu 5",
          to: "/menu-5",
          icon: <HomeOutlinedIcon />,
        },
        // Add more submenu items as needed
      ],
    },
    // Add more top-level menu items as needed
  ];
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarComponent
            menuItems={test === "Execative" ? menuItems : menuItems2}
          />
          <main className="content">
            <Topbar />

            <ExecativeLevelDashboard />
          </main>
          {/* <SignInSide/> */}
          {/* <Carousel images={countries}/> */}
          {/* <HomeComponent images={countries}/> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
