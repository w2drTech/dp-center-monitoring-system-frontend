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

import { Route, Router, Routes } from "react-router-dom";
import StudentAttendance from "./scenes/studentAttendance";
import Team from "./scenes/table/table";
import Register from "./scenes/register";
import TopPerformance from "./scenes/table/table";
import { ToastContainer } from "react-toastify";
import LoginLayout from "./Layouts/LoginLayout";
import HomeLayout from "./Layouts/HomeLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import ExecutiveLevelDashboard from "./scenes/execative-level-dashboard";
import Notfound from "./scenes/NotFound/Notfound";
function App() {
  const [theme, colorMode] = useMode();
  const images = [
    "../../assets/1.jpg",
    "../../assets/2.jpg",
    "../../assets/3.jpg",
    // Add more image URLs as needed
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" exact element={<HomeLayout />}>
                <Route
                  path="/"
                  element={<HomeComponent images={countries} />}
                />
                <Route path="register" element={<Register />} />
              </Route>
              <Route path="/login" element={<LoginLayout />} />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route
                  path="executive"
                  exact
                  element={<ExecutiveLevelDashboard />}
                />
                <Route
                  path="student-attendance"
                  element={<StudentAttendance />}
                />
                <Route path="top-performance" element={<TopPerformance />} />
              </Route>
              <Route path="*" element={<Notfound/>}/>
            </Routes>
          </main>
          {/* <SignInSide />
           */}
          {/* <Carousel images={countries} /> */}
          {/* <HomeComponent images={countries} />  */}
          {/* <Register/> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
