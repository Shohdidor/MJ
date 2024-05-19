import React, { useEffect, useRef } from 'react';
import "../../App.css";


import LalaLend from "/src/assets/video/Ла-Ла Ленд - Epilogue (Финальная сцена).mp4"

function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    },1000); // Задержка в 2 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Glav2 h-[100vh]'>
      <div>
        <h1 className='FirstText text-[25px] text-center pt-[50px]'>
          не забудь смотреть до конца 
        </h1>
        <video 
          className='h-[20vh] w-[100%]'
          src={LalaLend}
          ref={videoRef}
          controls={false}
          autoPlay={true}
        ></video>
        <h1 className='FirstText mt-[5px] text-center'>
          Прости меня за мои ошибки, моя дорогая. Каждый момент без твоего прощения кажется пустым, словно небо без звезд, ночь без луны. Я надеюсь, что мое искреннее признание достигнет твоего сердца, как первый луч солнца, проникающий сквозь густые облака, и что мы сможем вместе пройти через любые трудности, словно корабль плывущий по бурному морю. Ты - мое сияние, моя радуга после дождя, и я благодарен тебе за твою доброту и понимание. Прими мое прощение, пожалуйста, и дай нам возможность снова быть вместе, как два сердца, бьющихся в унисон, в мелодии любви и согласия.
        </h1>
      </div>
    </div>
  );
}

export default About;
