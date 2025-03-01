import { getUserInfo } from '@/store/auth';
import React, { useEffect, useState } from 'react'
import { ProfileDropDown } from './profile-drop';
import LeftMenu from './left-menu';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarRail } from './ui/sidebar';

const LeftSideBar = ({...props}) => {

  return (
    <div>
      <SidebarProvider>
        <Sidebar collapsible="icon" {...props}>
          <SidebarHeader>
            <ProfileDropDown sidebar={true} />
          </SidebarHeader>
          <SidebarContent>
            <LeftMenu />
            {/* <NavMain items={data.navMain} />
            <NavProjects projects={data.projects} /> */}
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