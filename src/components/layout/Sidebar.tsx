import React from "react";
import { NavLink } from "react-router-dom";
import {
  CreditCardOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  UserOutlined,
  BarChartOutlined,
  TeamOutlined,
  StarOutlined,
  SnippetsOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const menuItems = [
  { name: "Dashboard", icon: <HomeOutlined />, path: "/dashboard" },
  {
    name: "Transactions",
    icon: <DollarCircleOutlined />,
    path: "/transactions",
  },
  { name: "Accounts", icon: <TeamOutlined />, path: "/accounts" },
  { name: "Investments", icon: <BarChartOutlined />, path: "/investments" },
  { name: "Credit Cards", icon: <CreditCardOutlined />, path: "/credit-cards" },
  { name: "Loans", icon: <DollarCircleOutlined />, path: "/loans" },
  { name: "Services", icon: <UserOutlined />, path: "/services" },
  { name: "My Privileges", icon: <StarOutlined />, path: "/privileges" },
  { name: "Setting", icon: <SettingOutlined />, path: "/settings" },
];

const Sidebar = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="w-64 h-full bg-white p-4">
      <div className="flex items-center space-x-2 mb-4 ml-2">
        <SnippetsOutlined className="text-2xl" />
        <span className="text-2xl font-bold text-indigo-900">Soar Task</span>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            onClick={onClick}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
