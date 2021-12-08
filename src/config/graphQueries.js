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

const queries = {
  getOSStatsQuery: getOSStats,
  getSvxlinkConfigQuery: getSvxlinkConfig,
};

export default queries;