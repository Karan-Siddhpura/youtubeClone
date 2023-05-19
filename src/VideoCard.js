import React from 'react';
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumnail" src={image} alt="" />
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar"
                    alt={channelImage}
                    src={channelImage} />

                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} * {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
