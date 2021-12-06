import ContentWrapper from '../../components/ContentWrapper';

const HomeScreen = () => {
  return (
    <ContentWrapper pageName="Dashboard">
        <div className="container-lg" style={{ backgroundColor: 'rgba(0, 0, 0, .10)', padding: 10 }}>
          <h6 style={{ fontWeight: 'bold' }}>System Monitoring</h6>
          <div className="row" style={{ padding: 5 }}>
            <div className="col-sm-3" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>Network</div>
              <div>eth0: 255.255.255.255</div>
              <div>wlan0: 123.123.123.123</div>
            </div>
            <div className="col-sm-3" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>CPU</div>
              <div>23% Utilization</div>
            </div>
            <div className="col-sm-3" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>Memory</div>
              <div>Used: 1.43GB</div>
              <div>Free: 2.02GB</div>
            </div>
            <div className="col-sm-3" style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
              <div style={{ fontWeight: 'bold' }}>Sound</div>
              <div>Sound Card Connected</div>
            </div>
          </div>
        </div>
    </ContentWrapper>
  )
};

export default HomeScreen;