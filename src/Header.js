import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React, {useState} from 'react'
import "./Header.css"
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setInputSearch]= useState("");

    return (
        <div className="header">
            <div className="header__left">
                <div className="menu"><MenuIcon/></div>
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="logo" className="header__logo" />
                </Link>
                
            </div>
            <div className="header__centre">
                <div className="header__input">
                    <input 
                    value={inputSearch}
                    type="text" 
                    placeholder="Search" 
                    onChange={(e)=>setInputSearch(e.target.value)}
                    />
                </div>
                <div className="search__Icon">
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="search__icon" fontSize="small"/>
                    </Link>
                </div>
            </div>
            <div className="header__right">
                <div className="header__rightIcon">
                    <VideoCallIcon  className="header__righticon"/>
                    <AppsIcon className="header__righticon"/>
                    <NotificationsIcon className="header__righticon"/>
                </div>
                <Avatar src="https://www.irishtimes.com/polopoly_fs/1.4026833.1569190266!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="profile"/>      
            </div>
        </div>
    )
}

export default Header