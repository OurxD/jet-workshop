import { useEffect, useReducer } from 'react';
import client from '../../apollo/client';

const initialState = {
  data: {},
  loading: true,
  error: false,
};

const useQueryReducer = (_, action) => {
  switch (action.type) {
    case 'success':
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case 'error':
      return {
        data: action.data,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};
const EMPTY_OBJECT = {};

export const runQuery = query => client.query({
  query,
});

const useQuery = (query, options = EMPTY_OBJECT) => {
  const [state, dispatch] = useReducer(useQueryReducer, initialState);

  useEffect(() => {
    const callQuery = async () => {
      try {
        const { data } = await runQuery(query);
  
        dispatch({
          type: 'success',
          data,
        });
      } catch (err) {
        dispatch({
          type: 'error',
          data: err,
        });
      }
    };

    callQuery();
  }, [query, options]);

  return state;
};

export default useQuery;
