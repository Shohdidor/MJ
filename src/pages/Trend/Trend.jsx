import React, { useRef, useEffect, useState } from 'react';
import "../../App.css";


import NotebookRemember from "/src/assets/video/Довольно думать о том, чего хотят другие!..Чего хочешь т.webm"
import HugTrend from "/src/assets/video/✨HUG TREND✨ - TIKTOK COMPILATION.webm"

function Trend() {
  const [isFirstVideoEnded, setIsFirstVideoEnded] = useState(false);
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (firstVideoRef.current) {
        firstVideoRef.current.play();
      }
    }, 1000); // Задержка в 1 секунды

    return () => clearTimeout(timer);
  }, []);

  const handleFirstVideoEnded = () => {
    setIsFirstVideoEnded(true);
    setTimeout(() => {
      if (secondVideoRef.current) {
        secondVideoRef.current.currentTime = 40.8;
        secondVideoRef.current.play();
      }
    }, 1000);
  };

  const handleSecondVideoTimeUpdate = () => {
    if (secondVideoRef.current.currentTime >= 48) {
      secondVideoRef.current.pause();
    }
  };

  return (
    <div className='Glav2'>

      <div className='video-container m-auto py-[40px]'>
        <video 
          ref={firstVideoRef}
          src={NotebookRemember}
          className='styled-video'
          onEnded={handleFirstVideoEnded}
          autoPlay={false}
          controls={false}
          muted={false}
          loop={false}
        ></video>
        {!isFirstVideoEnded && (
          <h1 className='FirstText text-[15px] text-center text-gray-800 items-center'>
            Ты мне нужна... я хочу чтобы ты была со мной 
            <p className='text-red-700 pt-[30px] text-center'>
            Погружайся в мгновения, дай первому видео завершить свой танец, прежде чем начаться второму
            </p>
          </h1>
        )}
      </div>

      <div className="instagram-reels-container">
        <video 
          ref={secondVideoRef}
          src={HugTrend}
          className='instagram-reels-video'
          onTimeUpdate={handleSecondVideoTimeUpdate}
        ></video>
        
      </div>
      <div className='pb-[250px]'>
      <h1 className='FirstText text-center text-[18px] py-[10px]'>
        Тренд который мы делали вместе 
        но у нас получилось по лучшее 
      </h1>
      </div>
    </div>
  );
}

export default Trend;
