const initialState = {
    data: [],
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload, error: null };
      case 'FETCH_DATA_FAILURE':
        return { ...state, data: [], error: action.error };
      default:
        return state;
    }
  };
  
  export default rootReducer;