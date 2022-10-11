import React from 'react'
import './VideoCard.css'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'
function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
        
        <h2>Recommended</h2>
        <div className='recommendedVideos__videos'>
          <VideoCard 
          title='Whether we like it or not..'
          views='2M views'
          timestamp='4 days ago'
          channelImage='https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8'
          channel='Christian'
          image='https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g'/>
          <VideoCard 
          title='Whether we like it or not..'
          views='2M views'
          timestamp='4 days ago'
          channelImage='https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8'
          channel='Christian'
          image='https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g'/>
        </div>
        </div>
  )
}

export default RecommendedVideos