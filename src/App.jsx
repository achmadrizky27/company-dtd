import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
