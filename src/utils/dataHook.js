import React from 'react';
import { useStateValue } from '../state';
import {
  getOSStatsHook,
  getSvxlinkConfigFileHook,
  getSvxlinkLogFileHook,
  getSvxlinkStatusHook,
} from "./graphHooks";

const useAllDataHook = () => {
  const [loading, setLoading] = React.useState(false);
  const [{}, dispatch] = useStateValue(); // eslint-disable-line
  const [errors, setError] = React.useState([]);
  const [loadOSStatsData, {
    data: osStatsData,
    error: osStatsError,
    refetch: osStatsRefetch,
    loading: osStatsLoading,
    called: osStatsCalled,
  }] = getOSStatsHook();
  const [loadSvxlinkConfigFileData, {
    data: svxlinkConfigData,
    error: svxlinkConfigError,
    refetch: svxlinkConfigRefetch,
    loading: svxlinkConfigLoading,
    called: svxlinkConfigCalled,
  }] = getSvxlinkConfigFileHook();
  const [loadSvxlinkLogFileData, {
    data: svxlinkLogData,
    error: svxlinkLogError,
    refetch: svxlinkLogRefetch,
    loading: svxlinkLogLoading,
    called: svxlinkLogCalled,
  }] = getSvxlinkLogFileHook();
  const [loadSvxlinkStatusData, {
    data: svxlinkStatusData,
    error: svxlinkStatusError,
    refetch: svxlinkStatusRefetch,
    loading: svxlinkStatusLoading,
    called: svxlinkStatusCalled,
  }] = getSvxlinkStatusHook();

  if (osStatsError) {
    setError([...errors, osStatsError]);
  }

  if (svxlinkConfigError) {
    setError([...errors, svxlinkConfigError]);
  }

  if (svxlinkLogError) {
    setError([...errors, svxlinkLogError]);
  }

  if (svxlinkStatusError) {
    setError([...errors, svxlinkStatusError]);
  }

  const osStatsCallback = React.useCallback(() => {
    if (osStatsData) {
      // console.info('osStatsData:', osStatsData);
      const { getOSStats } = osStatsData;
      dispatch({
        type: 'OSStats',
        osStats: getOSStats,
      });
    }
  }, [osStatsData, dispatch]);

  const svxlinkConfigCallback = React.useCallback(() => {
    if (svxlinkConfigData) {
      const { getSvxlinkConfigFile } = svxlinkConfigData;
      if (getSvxlinkConfigFile) {
        const { file } = getSvxlinkConfigFile;
        dispatch({
          type: 'SvxlinkConfigFile',
          file,
        });
      }
      
    }
  }, [svxlinkConfigData, dispatch]);

  const svxlinkLogCallback = React.useCallback(() => {
    if (svxlinkLogData) {
      
      const { getSvxlinkLogFile } = svxlinkLogData;
      if (getSvxlinkLogFile) {
        const { file } = getSvxlinkLogFile;
        dispatch({
          type: 'SvxlinkLogFile',
          file,
        })
      }
    }
  }, [svxlinkLogData, dispatch]);

  const svxlinkStatusCallback = React.useCallback(() => {
    if (svxlinkStatusData) {
      const { getSvxlinkStatus } = svxlinkStatusData;
      if (getSvxlinkStatus) {
        dispatch({
          type: 'SvxlinkStatus',
          svxlinkStatus: getSvxlinkStatus,
        });
      }
    }
  }, [svxlinkStatusData, dispatch]);

  React.useEffect(() => {
    osStatsCallback();
  }, [osStatsCallback]);

  React.useEffect(() => {
    svxlinkConfigCallback();
  }, [svxlinkConfigCallback]);

  React.useEffect(() => {
    svxlinkLogCallback();
  }, [svxlinkLogCallback]);

  React.useEffect(() => {
    svxlinkStatusCallback();
  }, [svxlinkStatusCallback])

  React.useCallback(() => {
    if (!osStatsLoading && !svxlinkConfigLoading && !svxlinkLogLoading && !svxlinkStatusLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [osStatsLoading, svxlinkConfigLoading, svxlinkLogLoading, svxlinkStatusLoading]);

  const refresh = () => {
    if (osStatsCalled) {
      osStatsRefetch();
    } else {
      loadOSStatsData();
    }
        
    if (svxlinkConfigCalled) {
      svxlinkConfigRefetch();
    } else {
      loadSvxlinkConfigFileData();
    }
    
    if (svxlinkLogCalled) {
      svxlinkLogRefetch();
    } else {
      loadSvxlinkLogFileData();
    }

    if (svxlinkStatusCalled) {
      svxlinkStatusRefetch();
    } else {
      loadSvxlinkStatusData();
    }
  };

  return {
    load: refresh,
    loading,
    errors,
    refresh,
  };
};

export default useAllDataHook;