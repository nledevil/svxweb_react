import PropTypes from 'prop-types';

const ContentWrapper = ({ children, pageName, hideButtons, saveFunction, buttonColor, saveDisabled }) => (
  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">{pageName}</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        {!hideButtons && (<div className="btn-group me-2">
          <button disabled={saveDisabled} type="button" className="btn btn-sm btn-outline-secondary" onClick={saveFunction} style={{ fontWeight: 'bold', color: buttonColor }}>Save</button>
        </div>)}
      </div>
    </div>
    {children}
  </main>
);

ContentWrapper.propTypes = {
  saveDisabled: PropTypes.bool,
  buttonColor: PropTypes.string,
  children: PropTypes.any,
  pageName: PropTypes.string,
  hideButtons: PropTypes.bool,
  saveFunction: PropTypes.func,
}

ContentWrapper.defaultProps = {
  saveDisabled: false,
  buttonColor: 'green',
  children: undefined,
  pageName: '',
  hideButtons: false,
  saveFunction: () => {},
}

export default ContentWrapper;