'use client';

import React, { Dispatch, FC, SetStateAction } from 'react';
import {
  gridClasses,
  DataGrid, GridCellParams, GridColDef, GridColumnHeaderParams,
} from '@mui/x-data-grid';
import { GridRowId, GridRowsProp } from '@mui/x-data-grid/models/gridRows';
import { GridSortModel } from '@mui/x-data-grid/models/gridSortModel';
import classes from './classes.module.css';
import { defaultRowsPerPageOptions } from '@/constants';

export interface BaseDataGridProps {
  dataList: GridRowsProp;
  totalElements: number;
  error?: boolean;
  errorReason?: string;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<BaseDataGridProps['pageNumber']>>;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<BaseDataGridProps['rowsPerPage']>>;
  loading: boolean;
  sortModel: GridSortModel;
  setSortModel: Dispatch<SetStateAction<BaseDataGridProps['sortModel']>>
  tableColumns: GridColDef[];
  onDeleteRow: (id: GridRowId) => void;
}

const tableSx = {
  [`.${gridClasses.columnHeaders}`]: {
    backgroundColor: '#FFFFFF',
    color: '#696E82',
    fontSize: 14,
  },
  [`.${gridClasses.columnSeparator}`]: {
    visibility: 'hidden',
  },
  [`.${gridClasses.row}.even`]: {
    backgroundColor: '#F7F6F9',
    '&:hover, &.Mui-hovered': {
      backgroundColor: 'red',
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    color: '#121931',
  },
  [`.${gridClasses.row}`]: {
    fontSize: 14,
  },
  [`.${gridClasses.checkboxInput}`]: {
    '&.Mui-checked': {
      color: '#586078',
    },
  },
  '.css-bsnvke-MuiInputBase-root-MuiTablePagination-select': {
    background: 'transparent',
    marginBottom: '10px',
  },
};

export const componentsProps = {
  pagination: {
    SelectProps: {
      MenuProps: {
        sx: {
          '& .MuiMenuItem-root': {
            fontSize: 15,
          },
        },
      },
      sx: {
        height: '30px',
        marginBottom: '5px',
      },
    },
  },
};

export const BaseDataGrid: FC<BaseDataGridProps> = ({
  dataList,
  totalElements,
  error,
  errorReason,
  pageNumber,
  setPageNumber,
  rowsPerPage,
  setRowsPerPage,
  loading,
  sortModel,
  setSortModel,
  tableColumns,
  onDeleteRow,
  getRowId,
}) => {
  const handleTableCellClick = (params: GridCellParams) => {
    if (params.field === 'deleteIcon') {
      onDeleteRow(params.id);
    }
  };
  const handleTableHeaderClick = (params: GridColumnHeaderParams) => {
    console.log(params);
  };

  return (
    <div className={classes.table}>
      {error && <div>{errorReason}</div>}
      {!error && (
        <DataGrid
          page={pageNumber}
          onPageChange={setPageNumber}
          getRowId={getRowId}
          rows={dataList}
          columns={tableColumns}
          pageSize={rowsPerPage}
          onPageSizeChange={setRowsPerPage}
          autoHeight
          disableColumnMenu
          loading={loading}
          sx={tableSx}
          rowCount={totalElements}
          rowsPerPageOptions={defaultRowsPerPageOptions}
          sortModel={sortModel}
          onSortModelChange={setSortModel}
          onCellClick={handleTableCellClick}
          onColumnHeaderClick={handleTableHeaderClick}
          paginationMode="server"
          componentsProps={componentsProps}
        />
      )}
    </div>
  );
};
