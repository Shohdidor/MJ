import React, { useEffect, useRef, useState } from 'react';
import "../../App.css";
import { motion, AnimatePresence } from 'framer-motion';

// IMG 
import MJ from "/src/assets/image/MJ.jpg"
import MyLoveForYouAlwaysForever from "/src/assets/image/My love for you always forever.jpg"
import Tormoz from "/src/assets/image/Tormoz.jpg"

import TheNightWeMet from "/src/assets/video/Lord Huron - The Night We Met (Official Audio).mp4"

function Home() {
  const videoRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(true);
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
    }

    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeIn) {
      const imageTimer = setTimeout(() => {
        setShowImages(true);
      }, sentence.length * 200 + 1000); // Wait for text animation to complete before showing images
      return () => clearTimeout(imageTimer);
    }
  }, [fadeIn]);

  const sentence = "Валейкум Ассалам, Дженет. Это я, Шохдидор. Хотел подарить тебе книгу, созданную мной, но ты отказалась, и я решил создать этот сайт для тебя... Сайт о нас, о нашей любви, о том, как мы были вместе, о том, как ты меня поддерживала. Ты - моя бесконечная любовь, мое вдохновение и мой смысл жизни. Этот сайт - посвящение нашим совместным моментам, нашим мечтам и тому, как моя любовь растет с каждым днем. Этот сайт - свидетельство нашей непреходящей привязанности и глубоких чувств. Пусть каждый уголок этого пространства напомнит тебе о наших счастливых мгновениях и бесконечной страсти. Люблю тебя ради Аллаха бесконечно.".split(' ');

  return (
    <div className='Glav'>
      <AnimatePresence>
        {fadeIn && (
          <motion.h1
            key="fadeIn"
            className='FirstText pt-[90px] px-[25px]'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            {sentence.map((word, index) => (
              <motion.span
                key={index}
                className='inline-block py-[1px] px-[2.5px]'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {word + ' '}
              </motion.span>
            ))}
          </motion.h1>
        )}
      </AnimatePresence>

      <video
        className='pb-[250px] hidden'
        src={TheNightWeMet}
        autoPlay
        controls
        ref={videoRef}
      ></video>

      <AnimatePresence>
        {showImages && (
          <div className='flex justify-center mt-[10px]'>
            <motion.img
              key="image1"
              className='w-[200px] rounded-[10px]'
              src={MyLoveForYouAlwaysForever}
              alt="My Love For You Always Forever"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: -10 }}
              exit={{ opacity: 0, rotate: -10 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              key="image2"
              className='w-[200px] rounded-[10px]'
              src={Tormoz}
              alt="Tormoz"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 10 }}
              exit={{ opacity: 0, rotate: -10 }}
              transition={{ duration: 1 }}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
