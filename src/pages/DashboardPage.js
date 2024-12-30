import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  const currentMenu = useSelector(state => state.menu.currentMenu);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="p-4 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-semibold text-gray-800">
              {currentMenu || '欢迎使用仪表盘'}
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
