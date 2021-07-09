import React from 'react'
import useFireStore from '../hooks/useFireStore'

const ImageGrid = () => {
  const { docs } = useFireStore('images')
  console.log(docs)

  return (
    <div className='image-grid'>
      {docs &&
        docs.map((doc) => (
          <div className='image-wrap' key={doc.id}>
            <img src={doc.url} alt='something' />
          </div>
        ))}
    </div>
  )
}

export default ImageGrid
