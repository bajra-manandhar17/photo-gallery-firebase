import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

//progress bar function
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)

  //remove bar after finishing getting the url (finish uploading)
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  //show progress bar during uploading
  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar
