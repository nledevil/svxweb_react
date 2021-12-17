import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import { useStateValue } from '../../state';

const LogsScreen = () => {
  const taRef = React.createRef();
  const [log, setLog] = React.useState('');
  const [{
    svxlinkLogFile,
  }] = useStateValue();

  React.useEffect(() => {
    if (svxlinkLogFile) {
      setLog(window.atob(svxlinkLogFile));
    }
  }, [svxlinkLogFile]);

  React.useEffect(() => {
    if (log && log !== '') {
      taRef.current.scrollTop = taRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <ContentWrapper pageName="Svxlink Log" hideButtons>
      <textarea ref={taRef} value={log} rows={25} style={{ width: '100%', height: '100%' }} readOnly />
    </ContentWrapper>
  )
};

export default LogsScreen;