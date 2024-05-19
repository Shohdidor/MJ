// Layout.js
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import WaveEffect from '../components/WaveEffect';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WcIcon from '@mui/icons-material/Wc';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import HomeIcon from '@mui/icons-material/Home';

// Определение анимационных вариаций и переходов
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw"
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "100vw"
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function Layout() {
  const { pathname } = useLocation();
  const [wave, setWave] = useState(null);

  const handleWave = (e) => {
    setWave({
      x: e.clientX,
      y: e.clientY,
    });
    setTimeout(() => setWave(null), 500); // Убираем эффект через 500 мс
  };

  return (
    <div className='Glav2 relative'>
      <ul className='flex justify-around px-[50px] py-[15px] relative'>
        <Link to="/">
          <motion.li
            className="text-black p-2 rounded-md relative overflow-hidden"
            animate={{
              color: pathname === "/" ? '#ff0000' : '#000000',
              backgroundColor: pathname === "/" ? '#ffe6e6' : '#D2B796'
            }}
            transition={{ duration: 0.5 }}
            onClick={handleWave}
          >
            <HomeIcon />
            {wave && pathname === "/" && <WaveEffect onClick={() => setWave(null)} />}
          </motion.li>
        </Link>
        <Link to="/music">
          <motion.li
            className="text-black p-2 rounded-md relative overflow-hidden"
            animate={{
              color: pathname === "/music" ? '#ff0000' : '#000000',
              backgroundColor: pathname === "/music" ? '#ffe6e6' : '#D2B796'
            }}
            transition={{ duration: 0.5 }}
            onClick={handleWave}
          >
            <WcIcon />
            {wave && pathname === "/music" && <WaveEffect onClick={() => setWave(null)} />}
          </motion.li>
        </Link>
        <Link to="/trend">
          <motion.li
            className="text-black p-2 rounded-md relative overflow-hidden"
            animate={{
              color: pathname === "/trend" ? '#ff0000' : '#000000',
              backgroundColor: pathname === "/trend" ? '#ffe6e6' : '#D2B796'
            }}
            transition={{ duration: 0.5 }}
            onClick={handleWave}
          >
            <FavoriteBorderIcon />
            {wave && pathname === "/trend" && <WaveEffect onClick={() => setWave(null)} />}
          </motion.li>
        </Link>
        <Link to="/about">
          <motion.li
            className="text-black p-2 rounded-md relative overflow-hidden"
            animate={{
              color: pathname === "/about" ? '#ff0000' : '#000000',
              backgroundColor: pathname === "/about" ? '#ffe6e6' : '#D2B796'
            }}
            transition={{ duration: 0.5 }}
            onClick={handleWave}
          >
            <AllInclusiveIcon />
            {wave && pathname === "/about" && <WaveEffect onClick={() => setWave(null)} />}
          </motion.li>
        </Link>
      </ul>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

export default Layout;
