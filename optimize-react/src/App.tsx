import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { DesignSystem } from "./pages/docs/DesignSystem";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs/design-system" element={<DesignSystem />} />
        </Routes>
    );
}

export default App;