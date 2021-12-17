/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import useAllDataHook from '../../utils/dataHook';

const Layout = () => {
  const [online, setOnline] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  let location = useLocation();
  const [pagePath, setPagePath] = React.useState('/');
  const { loading, errors, refresh } = useAllDataHook();

  if (errors && errors.length > 0) {
    for (let i = 0; i < errors.length; i += 1) {
      console.log('Data Error:', errors[i]); // eslint-disable-line
    }
  }

  React.useEffect(() => {
    if (!refreshing) {
      refresh();
    }
  }, []);

  React.useEffect(() => {
    if (!loading) {
      setRefreshing(false);
    } else {
      setRefreshing(true);
    }
  }, [loading]);

  React.useEffect(() => {
    if (location) {
      const { pathname } = location;
      if (pathname) {
        setPagePath(pathname);
      }
    }
  }, [location]);

  const checkIfPath = (pathname) => (pathname === pagePath) ? ' active' : '';

  // const checkKey = (key) => {
  //   if (key === "Enter") {
  //     console.info(`Search for ${searchString}`);
  //     setSearchString('');
  //   }
  // };

  const startSvxlink = () => {
    console.info('Trying to Start Svxlink');
  };

  const stopSvxlink = () => {
    console.info('Trying to stop Svxlink');
  };

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3" style={{ display: 'flex' }}>
          <Link to="/">
            <img src="svxweb_logo_white2.png" alt="SVXWEB" width="116" />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', color: 'white', fontWeight: 'bold' }}>{online ? 'Online' : 'Offline'}</div>
        </div>
        
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <input value={searchString} onChange={(e) => setSearchString(e.target.value)} onKeyPress={(e) => checkKey(e.key)} className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
        <div style={{ display: 'flex', paddingRight: 10, flexDirection: 'row' }}>
          {!online && (<button type="button" className="btn btn-sm btn-outline-secondary" onClick={startSvxlink} style={{ fontWeight: 'bold', color: 'green', margin: 3 }}>Start Svxlink</button>)}
          {online && (<button type="button" className="btn btn-sm btn-outline-secondary" onClick={stopSvxlink} style={{ fontWeight: 'bold', color: 'red', margin: 3 }}>Stop Svxlink</button>)}
        </div>
      </header>
      <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>SVXLink Settings</span>
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className={`nav-link ${checkIfPath('/')}`} aria-current="page" to="/">
                  <ion-icon name="home-outline" style={{ paddingRight: 5 }} />
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${checkIfPath('/settings')}`} to="/settings">
                  <ion-icon name="settings-outline" style={{ paddingRight: 5 }} />
                  Svxlink Config
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${checkIfPath('/logs')}`} to="/logs">
                  <ion-icon name="reader-outline" style={{ paddingRight: 5 }} />
                  Svxlink Log
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${checkIfPath('/modules')}`} to="/modules">
                  <ion-icon name="server-outline" style={{ paddingRight: 5 }} />
                  Modules
                </Link>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Raspberry PI Settings</span>
              <Link className="link-secondary" to="/" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
              </Link>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
              <Link className={`nav-link ${checkIfPath('/network')}`} to="/network">
                <ion-icon name="wifi-outline" style={{ paddingRight: 5 }} />
                  Network
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${checkIfPath('/terminal')}`} to="/terminal">
                  <ion-icon name="terminal-outline" style={{ paddingRight: 5 }} />
                  Terminal
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {<Outlet />}
      </div>
    </div>
    </>
  );
};

export default Layout;
