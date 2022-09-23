import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/LayOut/Header/Header';
import Footer from './components/LayOut/Footer/Footer';
import QuestionsNew from './pages/NewPost/QuestionsNew';
import EventsNew from './pages/NewPost/EventsNew';
import KnowledgeNew from './pages/NewPost/KnowledgeNew';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup/Signup';
import Main from './pages/Main';

// 글 목록
import { QnA } from './pages/List';
// 상세페이지
import Detail from './pages/DetailPage/Detail';

// 내 프로필
import Settings from './pages/Settings';
// 비밀번호 변경
import ChangePasswordConfirm from './pages/Settings/ProfileSetting/ChangePassWord/ChangePasswordConfirm';
// 회원 탈퇴
import SecessionTab from './pages/Settings/ProfileSetting/Secession/SecessionTab';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        <Route path="/questions/new" element={<QuestionsNew />} />
        <Route path="/events/new" element={<EventsNew />} />
        <Route path="/knowledge/new" element={<KnowledgeNew />} />
        {/* 상세페이지 */}
        <Route path="/articles/1" element={<Detail />} />

        {/* 카테고리 */}
        <Route path="/questions" element={<QnA />} />

        {/* 내 프로필 */}
        <Route path="/settings" element={<Settings />} />
        {/* 비밀번호 변경 */}
        <Route
          path="/settings/password-changes"
          element={<ChangePasswordConfirm />}
        />
        {/* 회원 탈퇴 */}
        <Route path="/user/withdrawConfirm" element={<SecessionTab />} />
        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
