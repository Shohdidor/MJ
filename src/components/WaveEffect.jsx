// WaveEffect.js
import React from 'react';
import { motion } from 'framer-motion';

const WaveEffect = ({ onClick }) => (
  <motion.div
    onClick={onClick}
    initial={{ scale: 0, opacity: 1 }}
    animate={{ scale: 1, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="absolute inset-0 rounded-full bg-black"
  />
);

export default WaveEffect;
