import { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./pages/routes";
import "./App.css";

function RouteFallback() {
  return (
    <div className="oneui">
      <div className="shell" style={{ paddingTop: 24 }}>
        <div className="card" style={{ textAlign: "center", padding: 16 }}>
          載入中...
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}
