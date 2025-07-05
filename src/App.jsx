import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetch("https://monitoring-backend-production-4e95.up.railway.app/api.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMetrics(data.metrics);
        } else {
          console.error("Erreur API :", data.error);
        }
      })
      .catch.error((err) => console.error("Fetch error:", err));
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>Dernières Métrics</div>
      <ul>
        {metrics.map((m, index) => (
          <li key={index}>
            {m.timestamp} : {m.value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
