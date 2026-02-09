import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routepages/home";
import Impressum from "./routepages/Impressum";
import Datenschutz from "./routepages/Datenschutz";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}

export default App;
