import reducer, { selectSortOption } from './slice';

describe('reducer', () => {
  describe('selectSortOption', () => {
    it('changes SortOption', () => {
      const initialState = {
        sortOption: '',
      };

      const selectedOption = 'orderByLowPrice';

      const state = reducer(initialState, selectSortOption(selectedOption));
      expect(state.sortOption).toEqual(selectedOption);
    });
  });
});
