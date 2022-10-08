import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
function Sidebar() {
  return (
    <div className='sidebar'>
        <h2>I am Sidebar</h2>

        <SidebarRow title="Home" />
        <SidebarRow title="Trending" />
        <SidebarRow title="Subscription" />
        </div>
  )
}

export default Sidebar