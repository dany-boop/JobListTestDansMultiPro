import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getJobById } from '../api/summary';
import { getDetail } from '../store/reducers/job';
import store from '../store/store';

export const useDetail = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const detail = useSelector(getDetail);

  const getJobDetail = useCallback(() => {
    store
      .dispatch(getJobById({ id }))
      .unwrap()
      .then()
      .catch(e => alert(e.message));
  }, [id]);

  useEffect(() => {
    getJobDetail();
  }, [getJobDetail]);

  return { detail };
};
