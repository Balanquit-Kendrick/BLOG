import { getUserInfo } from '@/store/auth';
import React, { useEffect, useState } from 'react'
import { ProfileDropDown } from './profile-drop';
import { LeftMenu } from './left-menu';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarRail } from './ui/sidebar';
import { BookOpen, Bot, Frame, PieChart, Settings2, SquareTerminal } from 'lucide-react';

const LeftSideBar = ({...props}) => {
  const data = {
    navMain: [
      {
        title: "Playground",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }
  return (
    <div className='w-[250px] h-[calc(100vh-48px)] fixed left-0 top-[48px] flex items-center justify-center'>
      <SidebarProvider>
        <Sidebar collapsible="icon" {...props}>
          <SidebarHeader>
            <ProfileDropDown sidebar={true} />
          </SidebarHeader>
          <SidebarContent>
            <LeftMenu items={data.navMain}/>
          </SidebarContent>
          {/* <SidebarFooter>
            <NavUser user={data.user} />
            </SidebarFooter> */}
          <SidebarRail />
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}

export default LeftSideBar