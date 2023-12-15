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
import PCWorkHours from "../scenes/execative-level-dashboard/pc-work-hours";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AllCenters from "../scenes/staff-dashboard/all-centers";
import OutlookUsers from "../scenes/staff-dashboard/ms-365-users/outlookusers";
import TeamsUsers from "../scenes/staff-dashboard/ms-365-users/Teams-users";
import YammerUsers from "../scenes/staff-dashboard/ms-365-users/yammer-users";
import Diversity2Icon from '@mui/icons-material/Diversity2';
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
        title: "Attendance Mapping",
        to: "student-attendance",
        icon: <HowToRegOutlinedIcon />,
      },
      {
        title: "Work Hours Analysis: PCs",
        to: "pc-performance",
        icon: <ComputerOutlinedIcon />,
      },
    ],
    
  },
  // {
  //   title: "Project Tracking",
  //   icon: <ChecklistRtlOutlinedIcon />,
  //   subItems: [
  //     {
  //       title: "Opened Projects",
  //       to: "",
  //       icon: <FileOpenOutlinedIcon />,
  //     },
  //     {
  //       title: "Completed Projects",
  //       to: "",
  //       icon: <RuleOutlinedIcon />,
  //     },
  //   ],
  // },
  // {
  //   title: "Top Performance Centers",
  //   to: "top-performance",
  //   icon: <TrendingUpOutlinedIcon />,
  // },
  {
    title: "MS 356 User Reports",
    icon: <SummarizeIcon />,
    subItems: [
      {
        title: "Outlook",
        to: "outlook",
        icon: <AlternateEmailIcon />,
      },
      {
        title: "Teams",
        to: "teams",
        icon: <GroupsIcon />,
      },
      {
        title: "Yammer",
        to: "yammer",
        icon: <Diversity3Icon />,
      },
    ],
  },
  {
    title: "Engage To Viva",
    to: "https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxNDEzNjI2NTExMzYifQ/new",
    icon: <Diversity2Icon />,
  },
];

const DashboardLayout = () => {
  return (
    <div className="app">
      <SidebarComponent menuItems={menuItems} />
      <main className="content">
        <Topbar />

        <Routes>
          <Route
            path="/executive"
            exact
            element={<ExecutiveLevelDashboard />}
          />
          <Route path="student-attendance" element={<StudentAttendance />} />
          <Route path="top-performance" element={<TopPerformance />} />
          <Route path="pc-performance" element={<PCWorkHours />} />
          <Route path="outlook" element={<OutlookUsers />} />
          <Route path="teams" element={<TeamsUsers />} />
          <Route path="yammer" element={<YammerUsers />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardLayout;
