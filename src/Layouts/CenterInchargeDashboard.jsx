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
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Notfound from "../scenes/NotFound/Notfound";
import CenterInchargeDashboard from "../scenes/center-incharge-dashboard";
import LineChart from "../components/LineChart";
import Test from "./Test";
import ViewAllStudents from "../scenes/center-incharge-dashboard/view-all-students";
const status = "Start";
const menuItems = [
  {
    title: "Dashboard",
    to: "center-manager",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "All Students",
    to: "view-all",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "PC Data",
    to: "view-all",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Daily Data",
    icon: <HomeOutlinedIcon />,
    subItems: [
      {
        title: "Today Students",
        to: "/menu-5",
        icon: <HomeOutlinedIcon />,
      },
    
    ],
  },
  {
    title: "Upload Files",
    to: "/menu-2",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: `${status} The Center`,
    onclick:()=>{status="End"},
    icon: <AlarmOnIcon />,
  },
];
const CenterManagerDashboardLayout = () => { 
  return (
    <div className="app">
      <SidebarComponent
        menuItems={ menuItems}
      />
      <main className="content">
        <Topbar />

        <Routes>
          <Route
            path="/center-manager"
            exact
            element={<CenterInchargeDashboard />}
          />
          <Route path="/view-all" element={<ViewAllStudents />} />

          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default CenterManagerDashboardLayout;
