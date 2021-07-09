import { useState, useEffect } from 'react'
import { projectStorage } from '../firebase/config'

//Function for handling file uploads and returning values
const useStorage = (file) => {
  // UseStates for progress, error and url values
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  // Runs everytime the file dependency changes
  useEffect(() => {
    //References
    const storageRef = projectStorage.ref(file.name)

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      (err) => {
        setError(err)
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        setUrl(url)
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
