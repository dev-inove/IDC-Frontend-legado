import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 250, sortable: false },
    { field: 'fullName', headerName: 'Nome completo', width: 250, sortable: false },
    { field: 'birthDate', headerName: 'Data de nascimento', width: 250, sortable: false },
    { field: 'age', headerName: 'Idade', width: 250, sortable: false },
    { field: 'gender', headerName: 'Sexo', width: 250, sortable: false },
    { field: 'visualImpairment', headerName: 'Grau de deficiência visual', width: 300, sortable: false },
];

const AssistedTable = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/assisted")
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

export default AssistedTable;