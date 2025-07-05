import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div className="min-h-screen bg-gray-100 p-4">
    <h1 className="text-2xl font-bold text-center">Monitoring Dashboard</h1>
    <p className="text-center mt-4">Coming soon: metrics, errors, anomalies...</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
