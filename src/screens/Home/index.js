import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import { useStateValue } from '../../state';

const HomeScreen = () => {
  const [memData, setMemData] = React.useState({ 
    freeMemMb: 0,
    freeMemPercentage: 0,
    totalMemMb: 0,
    usedMemMb: 0,
    usedMemPercentage: 0,
  });
  const [cpuData, setCpuData] = React.useState({
    cpuAvg: 0,
    cpuCount: 0,
    cpuModel: '',
  });
  const [netData, setNetData] = React.useState([]);
  const [osData, setOSData] = React.useState({
    arch: '',
    hostname: '',
    os: '',
    type: '',
    uptime: 0,
  });
  const [procData, setProcData] = React.useState({ totalProcesses: 0 });
  const [{
    osStats
  }] = useStateValue();
  React.useEffect(() => {
    if (osStats) {
      const { mem, cpu, net, os, proc } = osStats;
      if (mem) {
        setMemData(mem);
      }
      if (cpu) {
        setCpuData(cpu);
      }
      if (net) {
        setNetData(net);
      }
      if (os) {
        setOSData(os);
      }
      if (proc) {
        setProcData(proc);
      }
    }
  }, [osStats]);
  return (
    <ContentWrapper pageName="Dashboard">
        <div className="container-lg" style={{ backgroundColor: 'rgba(0, 0, 0, .10)', padding: 10 }}>
          <h6 style={{ fontWeight: 'bold' }}>System Monitoring</h6>
          <div className="row" style={{ padding: 5 }}>
            <div className="col-sm-6" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>System</div>
              <div>Hostname: {osData.hostname}</div>
              <div>Arch Type: {osData.arch}</div>
              <div>OS: {osData.os}</div>
              <div>OS Type: {osData.type}</div>
              <div>Uptime: {osData.uptime} Seconds</div>
            </div>
            <div className="col-sm-6" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>Network</div>
              {netData.filter(i => i.family === 'IPv4').map((item, idx) => (
                <div key={idx}>{item.iname}: {item.address}</div>
              ))}
            </div>
          </div>
          <div className="row" style={{ padding: 5 }}>
            <div className="col-sm-6" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>CPU</div>
              <div>Utilization: {cpuData.cpuAvg}%</div>
              <div>Core Count: {cpuData.cpuCount}</div>
              <div>Model: {cpuData.cpuModel}</div>
            </div>
            <div className="col-sm-6" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>Memory</div>
              <div>Total: {memData.totalMemMb} MB</div>
              <div>Used: {memData.usedMemMb} MB ({memData.usedMemPercentage}%)</div>
              <div>Free: {memData.freeMemMb} MB ({memData.freeMemPercentage}%)</div>
              <div>Total Processes: {procData.totalProcesses}</div>
            </div>
          </div>
          <div className="row" style={{ padding: 5 }}>
            <div className="col-sm-6" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>Sound</div>
            </div>
          </div>
        </div>
    </ContentWrapper>
  )
};

export default HomeScreen;