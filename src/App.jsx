import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SubNav from "./components/SubNav";
import Discover from "./components/Discover";

const App = () => {
  return (
    <div>
      <Header />
      <SubNav />
      <Routes>
        <Route path="/" element={<Discover />} />
      </Routes>
    </div>
  );
};

export default App;
