import React, { useState } from 'react';
import { 
  HiHome, 
  HiUsers,
  HiCog,
  HiChevronDown,
  HiChevronRight
} from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { setCurrentMenu } from '../redux/menuSlice';

const Sidebar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (index) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const menuItems = [
    {
      name: '仪表盘',
      icon: <HiHome className="w-6 h-6" />,
      path: '/dashboard'
    },
    {
      name: '用户管理',
      icon: <HiUsers className="w-6 h-6" />,
      subItems: [
        { name: '用户列表', path: '/users' },
        { name: '角色管理', path: '/roles' }
      ]
    },
    {
      name: '系统设置',
      icon: <HiCog className="w-6 h-6" />,
      subItems: [
        { name: '基本设置', path: '/settings' },
        { name: '权限管理', path: '/permissions' }
      ]
    }
  ];

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} bg-white shadow transform transition-width duration-200 ease-in-out`}>
      <div className="p-2">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              className={`flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer ${
                item.subItems && 'justify-between'
              }`}
              onClick={() => {
                if (item.subItems) {
                  toggleSubmenu(index);
                } else {
                  dispatch(setCurrentMenu(item.name));
                }
              }}
            >
              <div className="flex items-center">
                {item.icon}
                {isOpen && <span className="ml-2">{item.name}</span>}
              </div>
              {isOpen && item.subItems && (
                openSubmenus[index] ? 
                  <HiChevronDown className="w-5 h-5" /> : 
                  <HiChevronRight className="w-5 h-5" />
              )}
            </div>

            {isOpen && item.subItems && openSubmenus[index] && (
              <div className="pl-8">
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => dispatch(setCurrentMenu(subItem.name))}
                  >
                    <span className="ml-2">{subItem.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
