import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import LearningLog from "./pages/LearningLog.jsx";
import Study from "./pages/Study.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/learning" element={<LearningLog />} />
        <Route path="/hoc-tap" element={<Study />} />
      </Routes>
    </div>
  );
};

export default App;
