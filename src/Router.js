import { BrowserRouter, Route, Routes } from "react-router-dom";

// 메인페이지
import Main from "./pages/Main";

// 글 목록
import List from "./components/List";

// 내 프로필
import Settings from "./pages/Settings";
// 비밀번호 변경
import ChangePasswordConfirm from "./pages/Settings/ProfileSetting/ChangePassWord/ChangePasswordConfirm";
// 회원 탈퇴
import SecessionTab from "./pages/Settings/ProfileSetting/Secession/SecessionTab";

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
        {/* 비밀번호 변경 */}
        <Route path="/settings/password-changes" element={<ChangePasswordConfirm />} />
        {/* 회원 탈퇴 */}
        <Route path="/user/withdrawConfirm" element={<SecessionTab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
