import React, { useState, useRef, useEffect } from 'react'
import mainPhoto from '../images/photo.png'
import { TbPlayerTrackPrevFilled, TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import myMusic from '../media/taeyeon_poem.mp3';


function Cover() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(myMusic));

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.pause();
      audio.currentTime = 0; // Ensure music starts from the beginning next time
    };
  }, [isPlaying]);

  return (
    <div className="container">
        <div className='title'>💌Chúng tôi sắp kết hôn💌</div>
        <img className="cover__main-photo" src={mainPhoto} alt='weddingcouple'></img>
        <div className='cover__person'>
        <div>Trần Bình</div>
        <GoHeartFill className='cover__icon-heart' size="0.8em"/>
        <div>X</div>
        </div>
        <div className='cover__date'>Vào hồi 13h00 chiều, thứ Bảy, ngày 6 tháng 9 năm 2025</div>
        <div className='cover__place'>Đám cưới sẽ tổ chức</div>
        <div className='cover__line'></div>
        <div className='cover__icon-box'>
          <TbPlayerTrackPrevFilled size="1.5em"/>
          <TbPlayerSkipBackFilled size="1.5em"/>
           {isPlaying ? (
            <BsStopCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Stop Music"/>
          ) : (
            <BsPlayCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Play Music"/>
          )}
         
          <TbPlayerSkipForwardFilled size="1.5em"/>
          <TbPlayerTrackNextFilled size="1.5em"/>
        </div>
    </div>
  )
}

export default Cover
