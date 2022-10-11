import React from 'react'
import { Avatar } from '@material-ui/core'
function VideoCard({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='videoCard'>
       {/* <h4> VideoCard</h4> */}
       <div>
        <img src={image} alt=''/>
        <div className='videoCard__info'>
            <Avatar className='videoCard__avatar' alt={channel} src={channelImage}/>
            <div className='video__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views}. {timestamp}
                </p>
            </div>
        </div>
        </div>
       </div>
  )
}

export default VideoCard