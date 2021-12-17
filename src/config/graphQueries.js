import { gql } from "@apollo/client";

const getOSStats = gql`
{
  getOSStats {
    net { 
      iname
      address 
      netmask
      family
      mac
      internal
      cidr
      scopeid
    }
    os {
      hostname
      type
      arch
      uptime
      os
    }
    mem {
      totalMemMb
      usedMemMb
      freeMemMb
      usedMemPercentage
      freeMemPercentage
    }
    proc {
      totalProcesses
    }
    cpu {
      cpuAvg
      cpuCount
      cpuModel
      cpuTemp
    }
    audio {
      inputs
      outputs
    }
    usb
  }
}`;

const getSvxlinkConfig = gql`{
  getSvxlinkConfig {
    headerName
    settingName
    settingValue
  }
}`;

const getSvxlinkConfigFile = gql`{
  getSvxlinkConfigFile {
    file
  }
}`;

const getSvxlinkLogFile = gql`{
  getSvxlinkLogFile {
    file
  }
}`;

const getSvxlinkStatus = gql`{
  getSvxlinkStatus
}`;

const queries = {
  getOSStatsQuery: getOSStats,
  getSvxlinkConfigQuery: getSvxlinkConfig,
  getSvxlinkConfigFileQuery: getSvxlinkConfigFile,
  getSvxlinkLogFileQuery: getSvxlinkLogFile,
  getSvxlinkStatusQuery: getSvxlinkStatus,
};

export default queries;