import CartItemRow from './CartItemRow';
import {
  Table,
  Thead,
  Tbody,
  DelteButton,
  Container,
} from '../../styles/CartPageStyle';

export default function CartItemTable({
  cart,
  onChangeCheckBox,
  onClickDeleteButton,
  onChangeItemAmount,
}) {
  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <th>
              <label htmlFor="checkAll">
                <input
                  type="checkbox"
                  id="checkAll"
                  name="checkAll"
                  value="checkAll"
                />
              </label>
            </th>
            <th>상품정보</th>
            <th>수량</th>
            <th>상품 금액</th>
          </tr>
        </Thead>
        <Tbody>
          {cart.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onChangeCheckBox={onChangeCheckBox}
              onChangeItemAmount={onChangeItemAmount}
            />
          ))}
        </Tbody>
      </Table>
      <div>
        <DelteButton type="button" onClick={onClickDeleteButton}>
          선택 상품 삭제
        </DelteButton>
      </div>
    </Container>
  );
}
