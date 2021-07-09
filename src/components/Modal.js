import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div
      className='backdrop'
      onClick={handleClick}
      transistion={{ delay: 2 }}
    >
      <img
        src={selectedImg}
        alt='Enlarged Pic'
        transistion={{ delay: 1 }}
        onTransitionEnd={{ delay: 1 }}
      />
    </motion.div>
  )
}

export default Modal
