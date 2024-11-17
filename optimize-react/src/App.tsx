import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { DesignSystem } from "./pages/docs/DesignSystem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs/design-system" element={<DesignSystem />} />
      </Routes>
    </Router>
  );
}

export default App;