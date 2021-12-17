/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Routes, Route } from "react-router-dom";
import NoMatch from './screens/NoMatch';
import Home from './screens/Home';
import Layout from './screens/Layout';
import Settings from './screens/Settings';
import Modules from './screens/Modules';
import Network from './screens/Network';
import Terminal from './screens/Terminal';
import Logs from './screens/Logs';
import './App.css';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="modules" element={<Modules />} />
        <Route path="network" element={<Network />} />
        <Route path="terminal" element={<Terminal />} />
        <Route path="logs" element={<Logs />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
