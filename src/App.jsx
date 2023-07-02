import * as React from "react";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./Components/AppBar";
import Tour from "./page/Tour";
import DataScience from "./page/DataScience";
import MachineLearning from "./page/MachineLearning";
import ProgrammingFundamentals from "./page/ProgrammingFundamentals";

export default function MyApp() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
        <Route path="/data" element={<DataScience />} />
        <Route path="/machine" element={<MachineLearning />} />
        <Route path="/programming" element={<ProgrammingFundamentals />} />
      </Routes>
    </BrowserRouter>
  );
}
