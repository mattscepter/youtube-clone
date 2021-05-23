import React from 'react'
import "./SearchedVideo.css"
import { Avatar } from '@material-ui/core'

function SearchedVideo({title, img, profile, timestamp, views, channelname}) {
    return (
        <div className="searchvideo">
            <img src={img} alt="video" />
            <div className="searchvideo__info">
                <div className="searchvideo__text">
                    <h4>{title}</h4>
                    <p>
                        {views} · {timestamp}
                    </p>
                </div>
                <div className="searchvideo__avatar">
                    <Avatar className="search__avatar" alt={channelname} src={profile}/>
                    <p>{channelname}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchedVideo
