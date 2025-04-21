import React, { useState } from "react";
import { Drawer } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex">
      <div className="hidden md:block fixed z-20 border-r-2 border-gray-200 h-full">
        <Sidebar />
      </div>

      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closable={false}
      >
        <Sidebar onClick={() => setDrawerOpen(false)} />
      </Drawer>

      <main className="flex-1 md:ml-64 min-h-screen bg-gray-50">
        <Header onMenuClick={() => setDrawerOpen(true)} />
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
