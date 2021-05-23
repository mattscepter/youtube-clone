import React from 'react'
import "./Sidebar.css"
import Sidebarrow from './Sidebarrow'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrarySharp';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Sidebar() {
    return (
        <div className="sidebar">
            <Sidebarrow selected title="Home" Icon={HomeIcon}/>
            <Sidebarrow title="Explore"  Icon={ExploreIcon}/>
            <Sidebarrow title="Subscription" Icon={SubscriptionsIcon}/>
            <hr />
            <Sidebarrow title="Library" Icon={VideoLibraryIcon}/>
            <Sidebarrow title="History" Icon={HistoryIcon}/>
            <Sidebarrow title="Your videos" Icon={OndemandVideoIcon}/>
            <Sidebarrow title="Watch later" Icon={WatchLaterIcon}/>
            <Sidebarrow title="Liked Videos" Icon={ThumbUpIcon}/>
            <Sidebarrow title="Show more" Icon={ExpandMoreIcon}/>
            <hr />
            <h2>SUBSCRIPTIONS</h2>
            <Sidebarrow title="Clever Programmer" Icon={AccountCircleIcon}/>
            <Sidebarrow title="Pewdiepie" Icon={AccountCircleIcon}/>
            <Sidebarrow title="Unbox Therapy" Icon={AccountCircleIcon}/>
            <Sidebarrow title="FLying Beast" Icon={AccountCircleIcon}/>
            <Sidebarrow title="Mumbiker Nikhil" Icon={AccountCircleIcon}/>
            <Sidebarrow title="Marques Brownlee" Icon={AccountCircleIcon}/>
            <Sidebarrow title="Thapa Technical" Icon={AccountCircleIcon}/>
            <Sidebarrow title="Show 15 more" Icon={ExpandMoreIcon}/>
        </div>
    )
}

export default Sidebar
