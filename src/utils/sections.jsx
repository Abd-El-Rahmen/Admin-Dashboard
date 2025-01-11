import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MapIcon from '@mui/icons-material/Map';

const sections = [
  [
    { text: "Inbox", icon: <HomeIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleIcon />, path: "/manage-team" },
    { text: "Contacts", icon: <ContactsIcon />, path: "/contacts" },
    {
      text: "Invoice Balances",
      icon: <ReceiptIcon />,
      path: "/invoice-balances",
    },
  ],
  [
    { text: "Profile Form", icon: <PersonIcon />, path: "/profile-form" },
    { text: "Calendar", icon: <CalendarMonthIcon />, path: "/calendar" },
    { text: "FAQ Page", icon: <HelpOutlineIcon />, path: "/faq" },
  ],
  [
    { text: "Bar Chart", icon: <BarChartIcon />, path: "/bar-chart" },
    { text: "Pie Chart", icon: <PieChartOutlineIcon />, path: "/pie-chart" },
    { text: "Line Chart", icon: <ShowChartIcon />, path: "/line-chart" },
    { text: "Geography", icon: <MapIcon />, path: "/geography" },
  ],
];

export default sections;
