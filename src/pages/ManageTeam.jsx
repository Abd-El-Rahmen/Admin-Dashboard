import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { users,columns } from "../utils/data/TeamData";



const ManageTeam = () => {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={users} columns={columns} pageSize={5}  />
    </div>
  );
};

export default ManageTeam;
