import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/LayOut/Header/Header';
import Footer from './components/LayOut/Footer/Footer';
import QuestionsNew from './pages/NewPost/QuestionsNew';
import EventsNew from './pages/NewPost/EventsNew';
import KnowledgeNew from './pages/NewPost/KnowledgeNew';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup/Signup';
import Main from './pages/Main';

//내 회원정보
//import MyPage from './pages/myaccount/MyPage';
// 글 목록
import { QnA, Knowledge, Events, Notice, Jobs } from './pages/List';

// 상세페이지
import Detail from './pages/DetailPage/Detail';

// 내 프로필
import Settings from './pages/Settings';

// 비밀번호 변경
import ChangePasswordConfirm from './pages/Settings/ProfileSetting/ChangePassWord/ChangePasswordConfirm';

// 회원 탈퇴
import SecessionTab from './pages/Settings/ProfileSetting/Secession/SecessionTab';
import JobsNew from './pages/NewPost/JobsNew';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        <Route path="/questions/new" element={<QuestionsNew />} />
        <Route path="/events/new" element={<EventsNew />} />
        <Route path="/knowledge/new" element={<KnowledgeNew />} />
        <Route path="/jobs/new" element={<JobsNew />} />
        {/* 상세페이지 */}
        <Route path="/articles/:id" element={<Detail />} />

        {/* 카테고리 */}
        {/* questions */}
        <Route path="questions/*" element={<QnA />} />
        {/* knowledge */}
        <Route path="knowledge/*" element={<Knowledge />} />
        {/* events */}
        <Route path="events/*" element={<Events />} />
        {/* notice */}
        <Route path="notice/*" element={<Notice />}>
          <Route path="archive" element={<Notice />} />
        </Route>
        {/* jobs */}
        <Route path="jobs/*" element={<Jobs />}></Route>

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
