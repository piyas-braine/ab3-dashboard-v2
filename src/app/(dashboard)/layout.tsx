"use client";

import Navbar from "@/components/Shared/Navbar";
import Sidebar from "@/components/Shared/Sidebar";
import React, { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex justify-start items-start">
      <aside
        className={`fixed top-0 left-0 z-[299] w-[250px] h-screen ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } border-r border-border-light lg:translate-x-0 lg:block bg-bg-surface-primary transition-transform duration-300 ease-in-out`}
      >
        <Sidebar />
      </aside>
      <div className="lg:ml-[250px] flex-1 w-full lg:w-[calc(100%-250px)] min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="bg-bg-surface-secondary w-full min-h-[calc(100vh-100px)]">
          {children}
        </main>
      </div>

      {/* Backdrop for Sidebar on Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
