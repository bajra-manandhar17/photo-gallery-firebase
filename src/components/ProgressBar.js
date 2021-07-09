import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

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
  return <div className='progress-bar' style={{ width: progress + '%' }}></div>
}

export default ProgressBar
