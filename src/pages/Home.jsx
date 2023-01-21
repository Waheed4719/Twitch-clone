import React from 'react';
import LiveChannels from '../components/Home/LiveChannels';
import NextVideos from '../components/Home/NextVideos';
import Recommended from '../components/Home/Recommended';

const Home = () => {
    return (
        <div className='home'>
            <Recommended />
            <NextVideos />
            <LiveChannels />
        </div>
    );
};

export default Home;
