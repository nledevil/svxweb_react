import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import { useStateValue } from '../../state';

import './index.css';

const HomeScreen = () => {
  const [memData, setMemData] = React.useState({ 
    freeMemMb: -1,
    freeMemPercentage: 0,
    totalMemMb: 0,
    usedMemMb: -1,
    usedMemPercentage: 0,
  });
  const [cpuData, setCpuData] = React.useState({
    cpuAvg: 0,
    cpuCount: 0,
    cpuModel: '',
    cpuTemp: '',
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
  const [usbData, setUSBData] = React.useState([]);
  const [audioData, setAudioData] = React.useState({ inputs: [], outputs: []});
  const [{
    osStats
  }] = useStateValue();
  React.useEffect(() => {
    if (osStats) {
      const { mem, cpu, net, os, proc, audio, usb } = osStats;
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
      if (audio) {
        setAudioData(audio);
      }
      if (usb) {
        setUSBData(usb);
      }
    }
  }, [osStats]);
  return (
    <ContentWrapper pageName="System Dashboard" hideButtons>
        <div className="container-lg homeContainer">
          <div className="row">
            <div className="col-sm-6 sectionContainer">
              <h6 className="sectionHeader">System Info</h6>
              <div><b>Hostname:</b> {osData.hostname}</div>
              <div><b>Arch Type:</b> {osData.arch}</div>
              <div><b>OS:</b> {osData.os}</div>
              <div><b>OS Type:</b> {osData.type}</div>
              <div><b>Uptime:</b> {osData.uptime !== 0 && `${osData.uptime} Seconds`}</div>
            </div>
            <div className="col-sm-6 sectionContainer">
              <h6 className="sectionHeader">Network</h6>
              {netData.filter(i => i.family === 'IPv4').map((item, idx) => (
                <div key={idx}><b>{item.iname}:</b> {item.address}</div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 sectionContainer">
              <h6 className="sectionHeader">CPU</h6>
              <div><b>Utilization:</b> {cpuData.cpuAvg !== 0 && `${cpuData.cpuAvg}%`}</div>
              <div><b>Core Count:</b> {cpuData.cpuCount !== 0 && cpuData.cpuCount}</div>
              <div><b>Model:</b> {cpuData.cpuModel}</div>
              <div><b>Temp:</b> {cpuData.cpuTemp}</div>
            </div>
            <div className="col-sm-6 sectionContainer">
              <h6 className="sectionHeader">Memory</h6>
              <div><b>Total:</b> {memData.totalMemMb !== 0 && `${memData.totalMemMb}MB`}</div>
              <div><b>Used:</b> {memData.usedMemMb !== -1 && `${memData.usedMemMb} MB (${memData.usedMemPercentage}%)`}</div>
              <div><b>Free:</b> {memData.freeMemMb !== -1 && `${memData.freeMemMb} MB (${memData.freeMemPercentage}%)`}</div>
              <div><b>Total Processes:</b> {procData.totalProcesses !== 0 && procData.totalProcesses}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 sectionContainer">
              <h6 className="sectionHeader">Audio Inputs</h6>
              {audioData.inputs.map((i, idx) => (
                <div key={idx}>{i}</div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 sectionContainer">
              <h6 className="sectionHeader">Audio Outputs</h6>
              {audioData.outputs.map((i, idx) => (
                <div key={idx}>{i}</div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 sectionContainer">
              <h6 className="sectionHeader">USB Devices</h6>
              {usbData.map((i, idx) => (
                <div key={idx}>{i}</div>
              ))}
            </div>
          </div>
        </div>
    </ContentWrapper>
  )
};

export default HomeScreen;