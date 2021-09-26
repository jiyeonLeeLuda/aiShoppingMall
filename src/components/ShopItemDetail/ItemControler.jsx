import styled from '@emotion/styled';

const AmountGruop = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
});

export default function ItemControler({ itemAmount, onChange, onClick }) {
  return (
    <div>
      <AmountGruop>
        <label htmlFor="ItemAmount">
          수량
          <input
            id="ItemAmount"
            type="number"
            value={itemAmount}
            onChange={(event) => {
              onChange(event);
            }}
          />
        </label>
        <button type="button" onClick={onClick}>
          장바구니 담기
        </button>
      </AmountGruop>
    </div>
  );
}
