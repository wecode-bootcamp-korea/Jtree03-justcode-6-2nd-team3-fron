import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 메인페이지
import Main from './pages/Main';
import NewPost from './pages/NewPost';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
