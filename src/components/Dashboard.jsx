import React from "react";
import TopNavBar from "./TopNavBar";
import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";
import MainContent from "./MainContent";

function Dashboard() {
  return (
    <div className="wrapper">
      {/* Top Navbar */}
      <TopNavBar />

      {/* Sidebar */}
      <SidebarMenu />

      {/* Main Content */}
      <div className="content-wrapper">
        <MainContent />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
