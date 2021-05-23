import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";


const Dashboard = ({ children, authentication }) => {
  const history = useHistory()
  const loggedUser = JSON.parse(localStorage.getItem('user'))
  if (!loggedUser?.token && !loggedUser?.userInfo) {
    return <Redirect to="/login" />;
  }

  const fieldLogoutUser = (e) => {
    e.preventDefault()
    localStorage.removeItem('user')
    history.push('/login')
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <p className="navbar-brand">Gestion de stock</p>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group">
            <ul className="navbar-nav ml-auto ml-md-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="userDropdown"
                  href="#gugy"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user fa-fw"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <p className="dropdown-item">{`${loggedUser?.userInfo?.firstName} ${loggedUser?.userInfo?.lastName}`}</p>

                  <div className="dropdown-divider"></div>
                  <button
                    className="dropdown-item"
                    onClick={fieldLogoutUser}
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Menu</div>
                <Link className="nav-link" to="/dashboard">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Products
               </Link>


              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              {`${loggedUser?.userInfo?.firstName} ${loggedUser?.userInfo?.lastName}`}
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>{children}</main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  authentication: state?.authentication,
});
export default connect(mapStateToProps, null)(Dashboard);