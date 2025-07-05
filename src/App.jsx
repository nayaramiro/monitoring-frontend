import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [metrics, setMetrics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://monitoring-backend-production-4e95.up.railway.app/api.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMetrics(data.metrics);
        } else {
          setError(data.error || "Erreur inconnue");
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="App">
      <h1>Monitoring Dashboard</h1>

      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

      {metrics.length > 0 ? (
        <ul>
          {metrics.map((metric, index) => (
            <li key={index}>
              {metric.timestamp} - {metric.value}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune métrique disponible.</p>
      )}
    </div>
  );
}

export default App;
