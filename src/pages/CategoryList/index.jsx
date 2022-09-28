import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import List from '../../components/List';

export default function CategoryList() {

  const [pageInfo, setPageInfo] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.indexOf('questions') >= 0) {
      setPageInfo({
        name: 'QnA',
        path: 'questions',
        categoryPath: 'tech',
        id: 1,
      });
    } else if (location.pathname.indexOf('knowledge') >= 0) {
      setPageInfo({
        name: 'KNOWLEDGE',
        path: 'knowledge',
        id: 2,
      });
    } else if (location.pathname.indexOf('events') >= 0) {
      setPageInfo({
        name: 'EVENTS',
        path: 'events',
        id: 3
      });
    } else if (location.pathname.indexOf('notice') >= 0) {
      setPageInfo({
        name: 'NOTICE',
        path: 'notice',
        id: 4
      });
    } else if (location.pathname.indexOf('jobs') >= 0) {
      setPageInfo({
        name: 'JOBS',
        path: 'jobs',
        id: 5
      });
    }
  }, [location]);

  return pageInfo && <List pageInfo={pageInfo} />;
}
