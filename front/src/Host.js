import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";
import { AgGridColumn } from "ag-grid-react/lib/agGridColumn";
import { Button, Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./style";

function Host() {
  const classes = useStyles();

  const [gridApi, setGridApi] = useState(null);
  const [gridOptions, setGridOptions] = useState({
    defaultColDef: {
      editable: true,
      resizable: true,
      suppressMovable: true,
    },
    columnDefs: [
      { headerName: "Email", field: "email", width: 300 },
      { headerName: "Password", field: "password", editable: false },
      { headerName: "Created At", field: "created", editable: false },
      { headerName: "Quota", field: "quota" },
    ],
  });
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    {
      email: "clonekim@gmail.com",
      password: "*****",
      created: new Date(),
      quota: 500,
    },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "auto" }}>
      <AgGridReact rowData={rowData} gridOptions={gridOptions}></AgGridReact>
    </div>
  );
}

export default Host;
