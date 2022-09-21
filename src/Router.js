import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Login/Signup/Signup";
// 메인페이지
import Main from "./pages/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        {/* 회원가입 페이지 */}
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
