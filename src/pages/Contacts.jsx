import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { contacts, columns } from "../utils/data/ContactsData";

const Contacts = () => {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={contacts}
        columns={columns}
        
      />
    </div>
  );
};

export default Contacts;
