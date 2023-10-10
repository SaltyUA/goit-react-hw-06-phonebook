import { initialState } from './initialState';

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'filter/setFilter':
      return payload;
    default:
      return state;
  }
};
