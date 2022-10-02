import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';

const rows: GridRowsProp = [
    { id: 1, fullName: 'João Nunes de Castro', birthDate: '09/02/1976', age: 45, gender: 'Masculino', visualImpairment: null },

];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'fullName', headerName: 'Nome completo', width: 200 },
    { field: 'birthDate', headerName: 'Data de nascimento', width: 200 },
    { field: 'age', headerName: 'Idade', width: 100 },
    { field: 'gender', headerName: 'Sexo', width: 100 },
    { field: 'visualImpairment', headerName: 'Grau de deficiência visual', width: 250 },
];

function AssistedTable() {
    return (
      <div style={{ display: 'flex', height: 162.5, width: '100%', marginTop: '20px' }}>
        <DataGrid
         rows={rows}
         rowHeight={50}
         columns={columns}
         hideFooter
         components={{
    LoadingOverlay: LinearProgress,
      }}/>
      </div>
    );
  }

export default AssistedTable;