import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useThemeStore } from "./store/themeStore";
import { Route, Routes } from "react-router-dom";
import {  PieChart } from "@mui/icons-material";
import ManageTeam from "./pages/ManageTeam";
import ProfileForm from "./pages/ProfileForm";
import Calendar from "./pages/Calendar.jsx";
import FaqPage from "./pages/FaqPage";
import LineChart from "./pages/LineChart";
import BarChart from "./pages/BarChart.jsx";
import InvoiceBalance from "./pages/InvoiceBalance";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import Inbox from "./pages/Inbox";
import Contacts from "./pages/Contacts";

function App() {
  const { themeMode } = useThemeStore();

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar
        handleDrawerClose={handleDrawerClose}
        open={open}
        theme={theme}
      />
      <Box component="main" sx={{ flexGrow: 1, pl: 9, pt: 9 }}>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/manage-team" element={<ManageTeam />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoice-balances" element={<InvoiceBalance />} />
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/bar-chart" element={<BarChart />} />
          <Route path="/pie-chart" element={<PieChart />} />
          <Route path="/line-chart" element={<LineChart />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
