import { Routes, Route, Navigate } from "react-router-dom";
import { useUserContext } from "./context/UserContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Analytics from "./pages/Analytics";
import Entries from "./pages/Entries";
import Settings from "./pages/Settings";
import ReadEntry from "./pages/ReadEntry";

function App() {
  const { user } = useUserContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/entries" element={<Entries />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/read" element={<ReadEntry />} />
    </Routes>
  );
}

export default App;
