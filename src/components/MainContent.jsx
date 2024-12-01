import React from "react";

function MainContent() {
  return (
    <section className="content">
                    {/* Breadcrumb Section */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
  
        <div className="row">
          {/* Example Info Box */}
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          {/* Add other content here */}
        </div>
      </div>
    </section>
  );
}

export default MainContent;
