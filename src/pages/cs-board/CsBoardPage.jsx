import React, { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useHistory } from 'react-router';

import styles from './CsBoardPage.module.css';

const columns = [
  {
    id: 'createdAt',
    label: '작성일',
    minWidth: 50,
    align: 'center',
  },
  {
    id: 'title',
    label: '제목',
    minWidth: 200,
    align: 'center',
  },
];

const formatDate = (date) =>
  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

export default function CsBoardPage({ db, authService }) {
  const history = useHistory();
  const [loginUser, setLoginUser] = useState({
    id: null,
    nickName: null,
  });
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleClickWrite = () => {
    history.push('/board/write');
  };

  useEffect(() => {
    // get data

    const unsubscribe = authService.onAuthChange((user) => {
      if (!user) {
        history.push('/login');
        alert('로그인이 필요합니다.');
      } else {
        setLoginUser({ id: user.uid, nickName: user.displayName });
        db.readCsPosts(setRows, user.uid);
      }
    });

    return unsubscribe();
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>1:1 문의</h1>
      {loginUser.nickName && (
        <h3>{`${loginUser.nickName}님의 문의 내역입니다.`}</h3>
      )}
      <button
        type='button'
        className={styles.btnWrite}
        onClick={handleClickWrite}
      >
        문의 하기
      </button>
      {rows.length > 0 && (
        <Paper
          sx={{
            overflow: 'hidden',
            minWidth: 750,
          }}
        >
          <TableContainer>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        backgroundColor: '#CCC',
                        minWidth: column.minWidth,
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      onClick={() => {
                        history.push(`/board/${row.id}`);
                      }}
                      role='checkbox'
                      tabIndex={-1}
                      key={row.id}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell align='center'>
                        {formatDate(new Date(row.createdAt))}
                      </TableCell>
                      <TableCell align='center'>{row.title}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      {rows.length === 0 && <h4>문의내역이 없어요!</h4>}
    </section>
  );
}
