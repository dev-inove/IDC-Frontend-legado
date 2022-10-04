import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
import { useState, useEffect } from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100, sortable: false, cellClassName: 'id' },
    { field: 'activities', headerName: 'Nome da atividade, ação ou projeto', width: 1425, sortable: false, cellClassName: 'activities' },
];


const ActivitiesTable = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/activities")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  return (
    <div style={{ display: 'flex', height: 150, width: '100%', marginTop: '20px' }}>
      <DataGrid
        sx={{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 600,
        }}
        rows={tableData}
        rowHeight={50}
        columns={columns}
        hideFooter
        disableColumnMenu={true}
        components={{
          LoadingOverlay: LinearProgress,
        }}/>
    </div>
  )
}

export default ActivitiesTable;