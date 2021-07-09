import React, { useState } from 'react'

const UploadForm = () => {
  //Use State for file and error generating
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  //Allowed Image Types
  const types = ['image/png', 'image/jpeg', 'image/jpg']

  //Function for uploading and monitoring images
  const changeHandler = (e) => {
    let selected = e.target.files[0]

    //check image
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError()
    } else {
      setFile(null)
      setError('Please Select an Image File (png or jpeg/jpg)')
    }
  }

  //Input button redirecting to changeHandler function when invoked
  //output class to check and output error if type is not mentioned in the array else input the file name if valid
  return (
    <form>
      <label>
        <input type='file' onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name} </div>}
      </div>
    </form>
  )
}

export default UploadForm
