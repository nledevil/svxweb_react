import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import { useStateValue } from '../../state';
import { storeSvxlinkConfigFileHook } from '../../utils/graphHooks';

const SettingsScreen = () => {
  const [settingsChanged, setSettingsChanged] = React.useState(false);
  const [originalSettings, setOriginalSettings] = React.useState('');
  const [settings, setSettings] = React.useState('');
  const [{
    svxlinkConfigFile,
  }] = useStateValue();
  const [storeConfigFile, { data }] = storeSvxlinkConfigFileHook();
  
  if (data) {
    console.info('Data:', data);
  }

  React.useEffect(() => {
    if (svxlinkConfigFile) {
      const configFile = window.atob(svxlinkConfigFile);
      setOriginalSettings(configFile);
      setSettings(configFile);
    }
  }, [svxlinkConfigFile]);

  React.useEffect(() => {
    if (settings !== '' && originalSettings !== '') {
      if (settings && settings !== originalSettings) {
        setSettingsChanged(true);
      } else {
        setSettingsChanged(false);
      }
    }
  }, [settings, originalSettings]);

  const saveButton = () => {
    const newConfig = window.btoa(settings);
    storeConfigFile({
      variables: {
        input: {
          file: newConfig,
        }
      }
    });
    setSettingsChanged(false);
  };

  return (
    <ContentWrapper pageName="Settings" saveFunction={saveButton} buttonColor={(settingsChanged ? 'red' : 'green')} saveDisabled={!settingsChanged}>
      <h6>Note: Comments will be removed automatically</h6>
      <textarea value={settings} onChange={(e) => setSettings(e.target.value)} rows={25} style={{ width: '100%', height: '100%' }} />
    </ContentWrapper>
  )
};

export default SettingsScreen;