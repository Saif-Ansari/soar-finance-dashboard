import React from "react";
import {
  SearchOutlined,
  SettingOutlined,
  BellOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-white px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-0 md:static border-b-2 border-gray-200 h-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="md:hidden text-xl"
          >
            <MenuOutlined />
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-indigo-900 center">
          Overview
        </h2>

        <div className="md:hidden">
          <Avatar
            size="large"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 md:justify-end">
        <div className="flex flex-1 md:flex-none items-center bg-[#F5F6FA] px-4 py-2 rounded-full">
          <SearchOutlined className="text-[#6B7280] mr-2" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none text-sm text-[#6B7280] w-full md:w-48"
          />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="w-10 h-10 bg-[#F5F6FA] flex items-center justify-center rounded-full">
            <SettingOutlined className="text-[#6B7280] text-lg" />
          </div>
          <div className="w-10 h-10 bg-[#F5F6FA] flex items-center justify-center rounded-full">
            <BellOutlined className="text-blue-600 text-lg" />
          </div>

          <Avatar
            size="large"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
