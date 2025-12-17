import { HashRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./pages/routes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}
