import { BrowserRouter, Route, Routes } from "react-router-dom";

// 메인페이지
import Main from "../components/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
