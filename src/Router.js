import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Login/Signup/Signup";
import Main from "./pages/Main";
import NewPost from './pages/NewPost';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<NewPost />} />
        {/* 회원가입 페이지 */}
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
