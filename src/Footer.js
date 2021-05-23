import React from 'react'
import "./Footer.css"
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrarySharp';

function Footer() {
    return (
        <div className="footer">
            <div className="section">
                <HomeIcon/>
                <h4>Home</h4>
            </div>
            <div className="section">
                <WhatshotIcon/>
                <h4>Trending</h4>
            </div>
            <div className="section">
                <SubscriptionsIcon/>
                <h4>Subscription</h4>
            </div>
            <div className="section">
                <VideoLibraryIcon/>
                <h4>Library</h4>
            </div>
        </div>
    )
}

export default Footer
