import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  return (
    <motion.div
      animate={{ x: position.x, y: position.y }} 
      className='w-[50px] h-[50px] rounded-[50%] border border-neutral-50 fixed z-40'>
    </motion.div>
  );
};