const initialState = {
  contacts: [],
  isLoading: false,
  isEmpty: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
