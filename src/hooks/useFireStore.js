import { useState, useEffect } from 'react'
import { projectFireStore } from '../firebase/config'

//listening to realtime data update during the firing of snapshot
//unsub function to unsuscribe when no longer required
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = []
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id })
        })
        setDocs(documents)
      })

    return () => unsub()
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection])

  return { docs }
}

export default useFirestore
