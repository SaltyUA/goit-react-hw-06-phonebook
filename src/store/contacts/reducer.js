import { initialState } from './initialState';

export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/addContact':
      return [...state, payload];
    case 'contacts/deleteContact':
      return state.filter(el => el.id !== payload.contactId);
    default:
      return state;
  }
};
