import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
function SidebarRow({title}) {
  return (
    
    <div className='sidebarRow'>
        <HomeIcon />
    <h2>{title}</h2> 
        </div>
  )
}

export default SidebarRow;