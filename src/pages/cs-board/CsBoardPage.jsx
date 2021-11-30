import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Layout from '../../components/layout/Layout';
import styles from './CsBoardPage.module.css';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  {
    id: 'title',
    label: '제목',
    minWidth: 200,
    align: 'center',
  },
  {
    id: 'author',
    label: '글쓴이',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'createdAt',
    label: '작성일',
    minWidth: 50,
    align: 'right',
  },
];

const formatDate = (date) =>
  ` ${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
const rows = [
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
  {
    id: 1,
    title: '대량구매 문의 드립니다.',
    author: '홍길동',
    createdAt: 1607110465663,
  },
];

export default function CsBoardPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  return (
    <Layout title='CS'>
      <section className={styles.container}>
        <h1 className={styles.title}>문의 게시판</h1>
        <button type='button' className={styles.btnWrite}>
          문의 하기
        </button>
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
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell align='center'>
                        <a href='#'>{row.title}</a>
                      </TableCell>
                      <TableCell align='right'>{row.author}</TableCell>
                      <TableCell align='right'>
                        {formatDate(new Date(row.createdAt))}
                      </TableCell>
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
      </section>
    </Layout>
  );
}
