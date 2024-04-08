import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import LichChieuPage from "./pages/LichChieu/LichChieuPage";
import TinTucPage from "./pages/TinTuc/TinTucPage";
import QuestionPage from "./pages/QA/QuesionPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lichchieu" element={<LichChieuPage />} />
        <Route path="/TinTuc" element={<TinTucPage/>}/>
        <Route path="/Quesion" element={<QuestionPage/>}/>
        <Route path="/tintuc" element={<TinTucPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
