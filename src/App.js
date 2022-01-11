import React from "react";
import { Routes, Route } from "react-router-dom";
import { ColorPickerPage } from "./pages/ColorPickerPage";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="colorpicker" element={<ColorPickerPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
