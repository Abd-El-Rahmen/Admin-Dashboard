import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles"; 

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 28,
    phone: "1234567890",
    access: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 34,
    phone: "2345678901",
    access: "User",
  },
  {
    id: 3,
    name: "Robert Brown",
    email: "robertb@example.com",
    age: 41,
    phone: "3456789012",
    access: "Manager",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastrk@strk.com",
    age: 20,
    phone: "92384902384",
    access: "Manager",
  },
  {
    id: 5,
    name: "Michael Johnson",
    email: "michaelj@johnson.com",
    age: 29,
    phone: "4567890123",
    access: "User",
  },
  {
    id: 6,
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    age: 26,
    phone: "5678901234",
    access: "Admin",
  },
  {
    id: 7,
    name: "Chris Williams",
    email: "chrisw@example.com",
    age: 32,
    phone: "6789012345",
    access: "Manager",
  },
  {
    id: 8,
    name: "Olivia Harris",
    email: "oliviaharris@domain.com",
    age: 37,
    phone: "7890123456",
    access: "User",
  },
  {
    id: 9,
    name: "David Scott",
    email: "davidscott@domain.com",
    age: 45,
    phone: "8901234567",
    access: "Admin",
  },
  {
    id: 10,
    name: "Emma White",
    email: "emma.white@example.com",
    age: 22,
    phone: "9012345678",
    access: "User",
  },
  {
    id: 11,
    name: "James Taylor",
    email: "jamestaylor@example.com",
    age: 50,
    phone: "1023456789",
    access: "Manager",
  },
  {
    id: 12,
    name: "Sophia Clark",
    email: "sophia.clark@example.com",
    age: 30,
    phone: "2134567890",
    access: "Admin",
  },
  {
    id: 13,
    name: "Benjamin Harris",
    email: "benjamin.harris@domain.com",
    age: 40,
    phone: "3245678901",
    access: "User",
  },
  {
    id: 14,
    name: "Liam Lewis",
    email: "liam.lewis@domain.com",
    age: 33,
    phone: "4356789012",
    access: "Manager",
  },
  {
    id: 15,
    name: "Mia Robinson",
    email: "mia.robinson@example.com",
    age: 25,
    phone: "5467890123",
    access: "Admin",
  },
  {
    id: 16,
    name: "Lucas Carter",
    email: "lucas.carter@domain.com",
    age: 38,
    phone: "6578901234",
    access: "User",
  },
  {
    id: 17,
    name: "Amelia Walker",
    email: "amelia.walker@domain.com",
    age: 31,
    phone: "7689012345",
    access: "Manager",
  },
  {
    id: 18,
    name: "Ethan Young",
    email: "ethanyoung@example.com",
    age: 27,
    phone: "8790123456",
    access: "User",
  },
  {
    id: 19,
    name: "Charlotte King",
    email: "charlotte.king@domain.com",
    age: 23,
    phone: "9801234567",
    access: "Admin",
  },
];

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "phone", headerName: "Phone", width: 150 },
  {
    field: "access",
    headerName: "Access Level",
    width: 150,
    renderCell: ({ row }) => {
      const theme = useTheme(); 
      const accessLevel = row.access;

      return (
        <Box
          sx={{
            p: "5px",
            backgroundColor:
              accessLevel === "Admin"
                ? theme.palette.primary.main
                : accessLevel === "Manager"
                ? theme.palette.secondary.main
                : "#53ad96",
                color: "black",
            borderRadius: "4px",
            display: "flex",
            gap: "5px",
            
          }}
        >
            {accessLevel === "Admin"
                ? <AdminPanelSettingsOutlined/>
                : accessLevel === "Manager"
                ? <SecurityOutlined/>
                : <LockOpenOutlined/>}
          <Typography variant="body1">{accessLevel}</Typography>
        </Box>
      );
    },
  },
];
