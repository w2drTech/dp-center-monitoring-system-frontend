import { Route, Routes } from "react-router-dom";
import ExecutiveLevelDashboard from "../scenes/execative-level-dashboard";
import SidebarComponent from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import StudentAttendance from "../scenes/studentAttendance";
import TopPerformance from "../scenes/table/table";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import Notfound from "../scenes/NotFound/Notfound";
import CenterInchargeDashboard from "../scenes/center-incharge-dashboard";
import ViewAllStudents from "../scenes/center-incharge-dashboard/view-all-students";
import DailyStudentOverview from "../scenes/center-incharge-dashboard/daily-student-overview";
import { useEffect, useState } from "react";
import { setCenterStart } from "../services/center-manager-services/centeroperatinghoursService";
import PCPerformanceStats from "../scenes/center-incharge-dashboard/pc-perfomance";
import UploadFiles from "../scenes/center-incharge-dashboard/upload-files";

const CenterManagerDashboardLayout = () => {
  const menuItems = [
    {
      title: "Dashboard",
      to: "center-manager",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Registered Students",
      to: "view-all",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "PC Performance Stats",
      to: "pc-stats",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Daily Analytics",
      icon: <HomeOutlinedIcon />,
      subItems: [
        {
          title: "Daily Student Overview",
          to: "today-students",
          icon: <HomeOutlinedIcon />,
        },
      ],
    },
    {
      title: "Upload Files",
      to: "file-upload",
      icon: <HomeOutlinedIcon />,
    },
  ];

  return (
    <div className="app">
      <SidebarComponent menuItems={menuItems} />
      <main className="content">
        <Topbar />

        <Routes>
          <Route
            path="/center-manager"
            exact
            element={<CenterInchargeDashboard />}
          />
          <Route path="/view-all" element={<ViewAllStudents />} />
          <Route path="/today-students" element={<DailyStudentOverview />} />
          <Route path="/pc-stats" element={<PCPerformanceStats />} />
          <Route path="/file-upload" element={<UploadFiles />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
};

export default CenterManagerDashboardLayout;
