import React from 'react'
import "./Recommended.css"
import Video from './Video'
import videolist from "./videolist.js"
function Recommended() {
    return (
        <div className="recommended">
            <div className="recommend__video">

                {videolist.map((video)=>{
                    return(
                        <Video title={video.title} img={video.img} profile={video.profile} timestamp={video.timestamp} views={video.views} channelname={video.channelname}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Recommended
