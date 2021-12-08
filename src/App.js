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
import { useStateValue } from './state';
import { getOSStatsHook, getSvxlinkConfigHook } from "./utils/graphHooks";
import './App.css';

function App() {
  const [{}, dispatch] = useStateValue(); // eslint-disable-line
  const [errors, setError] = React.useState([]);
  // const [loading, setLoading] = React.useState(false);
  const [loadOSStatsData, {
    data: osStatsData,
    error: osStatsError,
    refetch: osStatsRefetch,
    // loading: osStatsLoading,
    called: osStatsCalled,
  }] = getOSStatsHook();
  const [loadSvxlinkConfigData, {
    data: svxlinkData,
    error: svxlinkError,
    refetch: svxlinkRefetch,
    // loading: svxlinkLoading,
    called: svxlinkCalled,
  }] = getSvxlinkConfigHook();
  
  if (osStatsError) {
    setError([...errors, osStatsError]);
  };

  if (svxlinkError) {
    setError([...errors, svxlinkError]);
  };

  React.useEffect(() => {
    refresh();
  }, []);

  React.useEffect(() => {
    if (osStatsData) {
      // console.info('osStatsData:', osStatsData);
      const { getOSStats } = osStatsData;
      dispatch({
        type: 'OSStats',
        osStats: getOSStats,
      });
    }
  }, [osStatsData]);

  React.useEffect(() => {
    if (svxlinkData) {
      // console.info('svxlinkData:', svxlinkData);
      const { getSvxlinkConfig } = svxlinkData;
      dispatch({
        type: 'SvxlinkConfig',
        svxlinkConfig: getSvxlinkConfig,
      });
    }
  }, [svxlinkData]);

  // React.useEffect(() => {
  //   if (!osStatsLoading && !svxlinkLoading) {
  //     setLoading(false);
  //   } else {
  //     setLoading(true);
  //   }
  // }, [osStatsLoading, svxlinkLoading]);

  const refresh = () => {
    if (osStatsCalled) {
      osStatsRefetch();
    } else {
      loadOSStatsData();
    }

    if (svxlinkCalled) {
      svxlinkRefetch();
    } else {
      loadSvxlinkConfigData();
    }
  };

  return (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="modules" element={<Modules />} />
        <Route path="network" element={<Network />} />
        <Route path="terminal" element={<Terminal />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
