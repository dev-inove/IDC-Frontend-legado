import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';

const rows: GridRowsProp = [];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'activities', headerName: 'Nome da atividade, ação ou projeto', width: 90 },
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