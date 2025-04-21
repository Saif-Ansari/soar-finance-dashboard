import React from "react";
import { Tabs } from "antd";
import EditProfileForm from "../../components/settings/EditProfileForm";
import Preferences from "../../components/settings/Preferences";
import Security from "../../components/settings/Security";

const { TabPane } = Tabs;

const Settings: React.FC = () => {
  return (
    <div className="mt-[100px] p-4 md:p-4 md:mt-0">
      <Tabs
        defaultActiveKey="edit-profile"
        tabBarGutter={32}
        className="bg-white rounded-2xl shadow-sm p-4 md:p-6"
      >
        <TabPane tab="Edit Profile" key="edit-profile">
          <EditProfileForm />
        </TabPane>
        <TabPane tab="Preferences" key="preferences">
          <Preferences />
        </TabPane>
        <TabPane tab="Security" key="security">
          <Security />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Settings;
