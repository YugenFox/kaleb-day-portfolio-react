import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
    {/* <SearchAppBar /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
