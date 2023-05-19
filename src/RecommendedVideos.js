import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import Rdata from "./Rdata";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
            {Rdata.map((val)=>{
                return(
                    <VideoCard 
                    title={val.title}
                    views={val.views}
                    timestamp={val.timestamp}
                    channelImage={val.channelImage}
                    channel={val.channel}
                    image={val.image}
                    />
                );
            })}
         
            </div>
        </div>
    )
}

export default RecommendedVideos;
