import React, { useContext, useEffect } from 'react';
import Sidebar from "../src/components/Sidebar";
import Player from '../src/components/Player';
import Display from '../src/components/Dispaly';
import { PlayerContext } from './context/PlayerContext';

/*import { assets } from './assets/assets';*/

const App = () => {
  const {audioRef,track} = useContext(PlayerContext);

  /*useEffect(() => {
    console.log("Current track file URL:", track.file);

    const handleCanPlay = () => {
      console.log("Audio can play");
    };

    const handleError = (e) => {
      console.error("Audio error", e);
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener('canplay', handleCanPlay);
    audioElement.addEventListener('error', handleError);

    return () => {
      audioElement.removeEventListener('canplay', handleCanPlay);
      audioElement.removeEventListener('error', handleError);
    };
  }, [track, audioRef]);*/

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex '>
        <Sidebar />
        <Display />
      </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;

