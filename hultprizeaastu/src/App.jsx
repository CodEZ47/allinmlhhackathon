import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import Error404 from "./pages/Error404";
import Loading from "./components/Loading.jsx";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" exact element={<HomePage />} />
    //     <Route path="/about" element={<AboutPage />} />
    //     <Route path="*" element={<Error404 />} />
    //   </Routes>
    // </BrowserRouter>
    <Loading />
  );
};

export default App;
