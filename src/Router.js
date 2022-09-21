import { BrowserRouter, Route, Routes } from "react-router-dom";

// 메인페이지
import Main from "./pages/Main";

// 글 목록
import List from "./components/List";

// 내 프로필
import Settings from "./pages/Settings";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />

        {/* 글 목록 */}
        <Route path="/list" element={<List />} />

        {/* 내 프로필 */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
