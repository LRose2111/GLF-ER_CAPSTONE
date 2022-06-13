import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons5 from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';

export const SideBarData = [
    {
        title: "Home",
        icon: <AiIcons.AiFillHome />,
        path: "/default"
    },
    {
        title: 'Public Land',
        path: '/publicland',
        icon: <GiIcons.GiDuck />,
      },
      {
        title: 'Calendar',
        path: '/',
        icon: <BsIcons.BsCalendarDay />,
      },
      {
        title: 'Huntr Videos',
        path: '/videos',
        icon: <FaIcons.FaVideoSlash />,
      },
      {
        title: 'Listings',
        path: '/listings',
        icon: <IoIcons5.IoMapOutline />,
      },
      {
        title: 'Huntr News',
        path: '/news',
        icon: <BsIcons.BsNewspaper />,
      },
      {
        title: 'About Me',
        path: '/about',
        icon: <IoIcons.IoMdHelpCircle />,
      }
]