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
import { connect } from "react-redux";
import { setSelectedSection as setSelectedSectionAction } from "../../store/actions/common";
export interface SideBarItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const menuItems: SideBarItem[] = [
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

interface Props {
  onClick?: () => void;
  setSelectedSection: (section: string) => void;
}

const Sidebar: React.FC<Props> = ({ onClick, setSelectedSection }) => {
  const handleClick = (section: string) => {
    setSelectedSection(section);
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="w-64 h-full bg-white p-4">
      <div className="flex items-center space-x-2 mb-4 ml-2">
        <SnippetsOutlined className="text-2xl" />
        <span className="text-2xl font-bold text-indigo-900">Soar Task</span>
      </div>
      <nav className="space-y-2 mt-6">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            onClick={() => handleClick(item.name)}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                isActive
                  ? "text-black"
                  : "text-gray-400 hover:text-black hover:bg-gray-100"
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

const mapDispatchToProps = {
  setSelectedSection: setSelectedSectionAction,
};

export default connect(null, mapDispatchToProps)(Sidebar);
