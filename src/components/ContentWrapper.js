const ContentWrapper = ({ children, pageName, hideButtons }) => (
  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">{pageName}</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        {!hideButtons && (<div className="btn-group me-2">
          <button type="button" className="btn btn-sm btn-outline-secondary" style={{ fontWeight: 'bold', color: 'green' }}>Save</button>
        </div>)}
      </div>
    </div>
    {children}
  </main>
);

export default ContentWrapper;