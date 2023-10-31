import { Route, Routes } from "react-router-dom";
import ExecutiveLevelDashboard from "../scenes/execative-level-dashboard";
import SidebarComponent from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import StudentAttendance from "../scenes/studentAttendance";
import TopPerformance from "../scenes/table/table";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Notfound from "../scenes/NotFound/Notfound";
const test = "Execative";
const menuItems = [
  {
    title: "Dashboard",
    to: "executive",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Center Details",
    icon: <SchoolOutlinedIcon />,
    subItems: [
      {
        title: "Student Attendance Details",
        to: "student-attendance",
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
    title: "Top Performance Centers",
    to: "top-performance",
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
const DashboardLayout = () => {
  return (
    <div className="app">
      <SidebarComponent
        menuItems={test === "Execative" ? menuItems : menuItems2}
      />
      <main className="content">
        <Topbar />

        <Routes>
          <Route
            path="/executive"
            exact
            element={<ExecutiveLevelDashboard />}
          />
          <Route path="/student-attendance" element={<StudentAttendance />} />
          <Route path="/top-performance" element={<TopPerformance />} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default DashboardLayout;
