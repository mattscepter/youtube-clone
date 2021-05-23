import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import SearchedVideo from './SearchedVideo';
import videolist from "./videolist"
import { Avatar, Button } from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="filter">
                <TuneIcon/>
                <p>Filter</p>
            </div>
            <div className="channel">
                <Avatar className="channel__icon" src="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="channel"/>
                <div className="channel__Text">
                    <div className="channel__text">
                        <h4>Marques Brownlee</h4>
                        <p>14.1M subscribers•1,352 videos</p>
                        <p className="channel__desc">MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!</p>
                    </div>
                    <div className="channel__button">
                        <Button  variant="outlined">SUBSCRIBED</Button>
                        <NotificationsNoneOutlinedIcon className="notification"/>
                    </div>
                </div>
            </div>
            <div className="search__video">
                {videolist.map((video)=>{
                    return(
                        <SearchedVideo title={video.title} img={video.img} profile={video.profile} timestamp={video.timestamp} views={video.views} channelname={video.channelname}/>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchPage
