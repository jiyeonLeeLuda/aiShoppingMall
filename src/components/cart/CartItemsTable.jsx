import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from '@mui/material';
import CartItemRow from './CartItemRow';
import styles from './CartItemsTable.module.css';

export default function CartItemTable({
  cart,
  onChangeCheckBox,
  onChangeCheckBoxAll,
  onClickDeleteButton,
  onChangeItemAmount,
}) {
  return (
    <section>
      <Paper
        sx={{
          overflow: 'hidden',
          minWidth: 750,
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: '#CCC',
                }}
              >
                <TableCell>
                  <label htmlFor='checkAll'>
                    <input
                      type='checkbox'
                      id='checkAll'
                      name='checkAll'
                      value='checkAll'
                      onChange={onChangeCheckBoxAll}
                    />
                  </label>
                </TableCell>
                <TableCell align='center'>상품정보</TableCell>
                <TableCell>수량</TableCell>
                <TableCell>상품 금액</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onChangeCheckBox={onChangeCheckBox}
                  onChangeItemAmount={onChangeItemAmount}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className={styles.btnContainer}>
        <button
          className={styles.btnDelete}
          type='button'
          onClick={onClickDeleteButton}
        >
          선택 상품 삭제
        </button>
      </div>
    </section>
  );
}
