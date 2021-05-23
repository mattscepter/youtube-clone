import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Video.css"

function Video({title, img, profile, timestamp, views, channelname}) {
    return (
        <div className="videoCard">
            <img src={img} alt="" />
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channelname} src={profile}/>
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channelname}</p>
                    <p>
                        {views} · {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video
