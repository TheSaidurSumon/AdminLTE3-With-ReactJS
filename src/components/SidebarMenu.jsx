import React from "react";

function SidebarMenu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="/" className="brand-link">
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">
         {/* User Panel */}
         <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="https://via.placeholder.com/50"
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              User Name
            </a>
          </div>
        </div>
        {/* Search Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Sidebar Menu */}
        <nav className="mt-2" style={{ overflowY: "auto", maxHeight: "75vh" }}>
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Dashboard */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/dashboard/overview" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Overview</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/dashboard/stats" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Stats</p>
                  </a>
                </li>
              </ul>
            </li>

            {/* Charts */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie"></i>
                <p>
                  Charts
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/charts/pie" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Pie Chart</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/charts/line" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Line Chart</p>
                  </a>
                </li>
              </ul>
            </li>

            {/* Widgets */}
            <li className="nav-item">
              <a href="/widgets" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Widgets
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li>

            {/* Layout Options */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy"></i>
                <p>
                  Layout Options
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/layout/fixed" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Fixed Layout</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/layout/collapsed" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Collapsed Sidebar</p>
                  </a>
                </li>
              </ul>
            </li>

        
          </ul>
        </nav>
        {/* End of Sidebar Menu */}
      </div>


{/* Sidebar Footer */}
<div
  className="sidebar-footer d-flex justify-content-end align-items-center"
  style={{
    
    position: "absolute",
    paddingRight:"20px",
    bottom: 0,
    width: "100%",
    height: "57px", // Matches the standard height of AdminLTE footers
    borderTop: "1px solid #4f5962",
   
  }}
>
  <button
    className="btn btn-link btn-sm text-light"
    style={{ padding: "0", fontSize: "1.2rem" }}
    onClick={(e) => {
      const body = document.body;
      const icon = e.currentTarget.querySelector("i");
      body.classList.toggle("sidebar-mini");
      icon.classList.toggle("fa-angle-double-left");
      icon.classList.toggle("fa-angle-double-right");
    }}
  >
    <i className="fas fa-angle-double-left"></i>
  </button>
</div>



      {/* End of Sidebar */}
    </aside>
  );
}

export default SidebarMenu;
