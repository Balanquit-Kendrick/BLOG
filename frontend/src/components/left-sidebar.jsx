import { getUserInfo } from '@/store/auth';
import React, { useEffect, useState } from 'react'
import { ProfileDropDown } from './profile-drop';
import { LeftMenu } from './left-menu';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarRail } from './ui/sidebar';
import { Archive, BookOpen, Bot, ChartBarStacked, CircleAlert, Contact, FileChartPie, Frame, Gem, House, PieChart, Settings2, SquareTerminal } from 'lucide-react';

const LeftSideBar = ({...props}) => {
  const data = {
    navMain: [
      {
        title: "Home",
        url: "#",
        icon: House,
        isActive: false,
      },
      {
        title: "Categories ",
        url: "#",
        icon: ChartBarStacked,
        items: [
          {
            title: "Tech",
            url: "#",
          },
          {
            title: "Business",
            url: "#",
          },
          {
            title: "Lifestyle",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
        ],
      },
      {
        title: "Popular Posts",
        url: "#",
        icon: Gem,
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
        title: "Recent Posts",
        url: "#",
        icon: FileChartPie,
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
      {
        title: "Archives",
        url: "#",
        icon: Archive,
        items: [
          {
            title: "2025",
            url: "#",
          },
          {
            title: "2024",
            url: "#",
          },
          {
            title: "2023",
            url: "#",
          },
        ],
      },
      {
        title: "About",
        url: "#",
        icon: CircleAlert,
      },
      {
        title: "Contact",
        url: "#",
        icon: Contact,
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