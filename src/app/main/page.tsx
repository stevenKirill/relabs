'use client';

import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GridRowId, GridSortModel, GridValidRowModel } from '@mui/x-data-grid';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { ajax } from '@/services/ajax';
import { BaseDataGrid } from '@/components/BaseDataGrid';
import { columns } from './colums';
import { defaultRowsPerPageOptions } from '@/constants';
import { formatTime } from '@/utils';
import { configureSocket } from '@/utils/socket';
import { IUsersResponse } from './types';
import classes from './page.module.css';
import { useStore } from '@/store';

const getUsers = async (rowsPerPage: number, pageNumber: number) => {
  try {
    const response = await ajax.get(`/users/list?limit${rowsPerPage}&offset=${pageNumber}`);
    const data = response.data as IUsersResponse;
    return data;
  } catch (error) {
    console.error(error);
    return {
      error: 'Ошибка',
    };
  }
};

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GridValidRowModel[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPageOptions[0]);
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [total, setTotal] = useState<number>(5);
  const path = usePathname();
  const router = useRouter();
  const socket = configureSocket();
  const setSocket = useStore((store) => store.setSocket);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  useEffect(() => {
    if (!isLoggedIn) {
      redirect('/login');
    }
  }, [isLoggedIn]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const users = await getUsers(rowsPerPage, pageNumber);
      router.push(`${path}?limit=${rowsPerPage}&offset=${pageNumber}`);
      if ('error' in users) {
        setError(true);
        setLoading(false);
        return;
      }
      const dataListWithIds = users?.items?.map((item, index) => ({
        ...item,
        id: uuidv4(),
        rowId: index + 1,
        event: '--',
        ctime: formatTime(item.ctime),
      }));
      setData(dataListWithIds);
      setTotal(users.total);
      setLoading(false);
    })();
  }, [rowsPerPage, pageNumber, router, path]);

  useEffect(() => {
    socket.onmessage = (event) => {
      console.log(event);
      const socketData = JSON.parse(event.data);
      setData((prev) => prev.map((item) => ({
        ...item,
        event: socketData.event,
      })));
    };
    setSocket(socket);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteRow = (deletingId: GridRowId) => {
    setData((prev) => prev.filter((item) => item.id !== deletingId));
  };
  return (
    <div className={classes.container}>
      {isLoggedIn && (
      <>
        <h1 className={classes.title}>Пользователи</h1>
        <BaseDataGrid
          dataList={data}
          totalElements={total}
          tableColumns={columns}
          loading={loading}
          error={error}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          rowsPerPage={rowsPerPage}
          sortModel={sortModel}
          setSortModel={setSortModel}
          setRowsPerPage={setRowsPerPage}
          onDeleteRow={handleDeleteRow}
        />
      </>
      )}
    </div>
  );
};

export default Main;
