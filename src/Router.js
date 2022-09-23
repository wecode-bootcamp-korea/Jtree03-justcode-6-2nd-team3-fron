import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NewPost from './pages/NewPost';
import Login from './pages/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
