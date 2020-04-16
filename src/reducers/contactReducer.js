import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

const initialState = {
  // contacts: [],
  //isLoading: false,
  // isEmpty: false,

  contacts: [
    {
      id: 1,
      name: "Sheddy",
      email: "sheddy@gmail.com",
      phone: "555-555-5555",
    },
    {
      id: 2,
      name: "Kofo",
      email: "kofo@gmail.com",
      phone: "444-444-4444",
    },
    {
      id: 3,
      name: "Executioner",
      email: "ibrahimolamikan@gmail.com",
      phone: "333-333-333",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) { 
    case GET_CONTACTS:
      return {
        ...state
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
