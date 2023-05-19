import React from 'react';
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import Cdata from "./Cdata";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
                channel="Clever Programmer"
                verified
                subs="700k"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...
            Latest from Clever Programmer"
            />
            <hr />

            {Cdata.map((val)=>{
                return(
                    <VideoRow
                     views={val.views}
                    timestamp={val.timestamp}
                    image={val.image}
                    channel={val.channel}
                    subs={val.subs}
                    title={val.title}
                    description={val.description}
                     />
                );
            })}
        </div>

    );
}

export default SearchPage;
