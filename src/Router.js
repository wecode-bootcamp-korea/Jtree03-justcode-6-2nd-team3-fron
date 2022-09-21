import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 메인페이지
import Main from './pages/Main';
// 상세페이지
import Detail from './pages/DetailPage/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        {/* 상세페이지 */}
        <Route path="/articles/1" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
