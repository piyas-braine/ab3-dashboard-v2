import Navbar from "@/components/Shared/Navbar";
import Sidebar from "@/components/Shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <aside className="w-[250px] border-r border-border-light">
        <Sidebar />
      </aside>
      <div className="flex-1 w-full min-h-screen">
        <Navbar />
        <main className="bg-bg-surface-secondary w-full h-[calc(100vh-100px)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
