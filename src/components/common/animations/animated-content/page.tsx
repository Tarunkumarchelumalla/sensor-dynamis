"use client";

import { motion } from "framer-motion";
import React, { CSSProperties } from "react";

interface AnimatedContentProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  style?: CSSProperties;
}

const AnimatedContent = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  direction = 'up',
  style  
}: AnimatedContentProps) => {
  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
