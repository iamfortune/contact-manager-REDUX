import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

const initialState = {
  // contacts: [],
  //isLoading: false,
  // isEmpty: false,
  contacts: []
};

export default (state = initialState, action) => {
  switch (action.type) { 
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return {
        ...state,
      };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(contact => 
            contact.id !== action.payload)
        };
        case ADD_CONTACT: 
        return {
          ...state,
          contacts: [action.payload, ...state.contacts]
        };
  }
};
