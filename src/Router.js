import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/LayOut/Header/Header";
import Footer from "./components/LayOut/Footer/Footer";
import Main from "./components/LayOut/Main";

function Router() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default Router;