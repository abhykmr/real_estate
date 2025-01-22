import React from "react";
import { BroweserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const App = () => {
  return (
    <BroweserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BroweserRouter>
  );
};

export default App;
