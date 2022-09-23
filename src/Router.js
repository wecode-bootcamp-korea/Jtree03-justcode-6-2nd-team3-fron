import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 메인페이지
import Main from './pages/Main';
import QuestionsNew from './pages/NewPost/QuestionsNew';
import EventsNew from './pages/NewPost/EventsNew';
import KnowledgeNew from './pages/NewPost/KnowledgeNew';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        <Route path="/questions/new" element={<QuestionsNew />} />
        <Route path="events/new" element={<EventsNew />} />
        <Route path="knowledge/new" element={<KnowledgeNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
