import React from "react";

function TopNavBar() {
  return (
    <>
      {/* Top Navbar */}
      <nav className="main-header navbar navbar-expand navbar-dark navbar-dark navbar-fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Search Bar */}
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        {/* Right Navbar Icons */}
        <ul className="navbar-nav ml-auto">
          {/* Notifications */}
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
            >
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2"></i> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>

          {/* Messages */}
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
            >
              <i className="far fa-comments"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      User Name
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">Message text...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>

          {/* Fullscreen */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>

          {/* Profile Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
            >
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="img-circle elevation-2"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="#" className="dropdown-item">
                <i className="fas fa-user mr-2"></i> Profile
              </a>
              <a href="#" className="dropdown-item">
                <i className="fas fa-cogs mr-2"></i> Settings
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-sign-out-alt mr-2"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>


    </>
  );
}

export default TopNavBar;
