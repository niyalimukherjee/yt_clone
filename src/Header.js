import React,{useState} from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import {Link} from "react-router-dom"
import './Header.css';
function Header() {
  const [inputSearch,setInputSearch]=useState('');
  return (
    <div className='header'>
        {/* <h1>Header</h1> */}
        <div className='header__left'>
        <MenuSharpIcon />
        <Link to='/'>
        <img className="header__logo"src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt=''/>
        </Link>
        </div>
        <div className='header__input'>
        <input onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type="text" />
        <Link to= {`/search/${inputSearch}`}>
        <SearchIcon className='header__inputButton'/>
      
       </Link>
        </div>
        <div className='header__icons'>
        <VideoCallIcon className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationsIcon className='header__icon'/>
        <Avatar/>
        </div>
        </div>
  )
}

export default Header