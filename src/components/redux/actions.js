import axios from 'axios';

export const fetchData = () => {
  return (dispatch) => {
    axios.get('https://root.utssavjewels.com/app/consumer/services_v1/api.php?x=getCollection')
      .then((response) => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', error });
      });
  };
};