import { Route, Routes } from "react-router-dom";
import SidebarComponent from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Notfound from "../scenes/NotFound/Notfound";

import StaffDashboard from "../scenes/staff-dashboard/dashboard";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StudentAttendance from "../scenes/studentAttendance";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AddCenter from "../scenes/staff-dashboard/add-center";
import AddCenterManager from "../scenes/staff-dashboard/add-center-manager";
import PCWorkHours from "../scenes/execative-level-dashboard/pc-work-hours";
import OutlookUsers from "../scenes/staff-dashboard/ms-365-users/outlookusers";
import TeamsUsers from "../scenes/staff-dashboard/ms-365-users/Teams-users";
import YammerUsers from "../scenes/staff-dashboard/ms-365-users/yammer-users";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AllCenters from "../scenes/staff-dashboard/all-centers";
import ExecutiveLevelDashboard from "../scenes/execative-level-dashboard";

const DpStaffDashboardLayout = () => {
  const menuItems = [
    {
      title: "Dashboard",
      to: "staff",
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
        // {
        //   title: "All Centers",
        //   to: "all-centers",
        //   icon: <ApartmentIcon />,
        // },
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
      title: "Center Management",
      icon: <ManageHistoryIcon />,
      subItems: [
        {
          title: "Add Computer Center",
          to: "add-center",
          icon: <AddLocationIcon />,
        },
        {
          title: "Add Center Manager",
          to: "add-center-manager",
          icon: <GroupAddIcon />,
        },
      ],
    },
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
  ];

  return (
    <div className="app">
      <SidebarComponent menuItems={menuItems} />
      <main className="content">
        <Topbar />

        <Routes>
          <Route path="staff" exact element={<ExecutiveLevelDashboard />} />
          <Route path="student-attendance" element={<StudentAttendance />} />
          <Route path="all-centers" element={<AllCenters />} />
          <Route path="add-center" element={<AddCenter />} />
          <Route path="add-center-manager" element={<AddCenterManager />} />
          <Route path="pc-performance" element={<PCWorkHours />} />
          <Route path="outlook" element={<OutlookUsers />} />
          <Route path="teams" element={<TeamsUsers />} />
          <Route path="yammer" element={<YammerUsers />} />
          {/* <Route path="/view-all" element={<ViewAllStudents />} />
          <Route path="/today-students" element={<DailyStudentOverview />} />
          <Route path="/file-upload" element={<UploadFiles />} /> */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
};

export default DpStaffDashboardLayout;
