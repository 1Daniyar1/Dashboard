import React, { useState } from 'react';
import clsx from 'clsx';
import { Menu } from 'antd';
import { MessageOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';

const AppMenu = () => {
    const [activeTab, setActiveTab] = useState('chats'); 

    const handleTabClick = (key) => {
        setActiveTab(key);
      };

      return (
        <Menu
        mode="horizontal"
        selectedKeys={[activeTab]}
        onClick={(e) => handleTabClick(e.key)}
        className="fixed bottom-0 w-full border-t border-gray-200 bg-white flex justify-around pb-2 shadow-top"
      >
        <Menu.Item key="tasks" onClick={() => handleTabClick('tasks')}>
          <div className="flex flex-col items-center justify-center">
            <CalendarOutlined className={clsx('text-lg', {
              'text-blue-500': activeTab === 'tasks',
              'text-gray-400': activeTab !== 'tasks',
            })} />
            <div className={clsx('text-lg', 'font-medium', 'font-inter', {
              'text-blue-500': activeTab === 'tasks',
              'text-gray-400': activeTab !== 'tasks',
            })}>
              Задания
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="chats" onClick={() => handleTabClick('chats')}>
          <div className="flex flex-col items-center justify-center">
            <MessageOutlined className={clsx('text-lg', {
              'text-blue-500': activeTab === 'chats',
              'text-gray-400': activeTab !== 'chats',
            })} />
            <div className={clsx('text-lg', 'font-medium', 'font-inter', {
              'text-blue-500': activeTab === 'chats',
              'text-gray-400': activeTab !== 'chats',
            })}>
              Чаты
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="settings" onClick={() => handleTabClick('settings')}>
          <div className="flex flex-col items-center justify-center">
            <SettingOutlined className={clsx('text-lg', {
              'text-blue-500': activeTab === 'settings',
              'text-gray-400': activeTab !== 'settings',
            })} />
            <div className={clsx('text-lg', 'font-medium', 'font-inter',{
              'text-blue-500': activeTab === 'settings',
              'text-gray-400': activeTab !== 'settings',
            })}>
              Настройки
            </div>
          </div>
        </Menu.Item>
      </Menu>
    );
};

export default AppMenu;
