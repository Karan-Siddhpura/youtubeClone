import React, { useState } from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Apps from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import './Header.css';
import { Link } from "react-router-dom";



function Header() {
    const [inputSearch, setinputSearch] = useState("");



    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo"
                        src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/youtube-512.png"
                        alt="" />
                </Link>
            </div>

            <div className="header__input">
                <input onChange={(e) => setinputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search"
                    type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <Apps className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    src="https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Free-Feeling-Sad-Pics-Images-Download.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Header;