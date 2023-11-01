import React from 'react'
import { useDataContext } from '../../contexts/DataContext'

const Header = () => {
    const {images,setImages,count} = useDataContext()
    const handleDelete=()=>{
        const updateImages = images.filter(dt=> dt.isChecked != true )
        setImages(updateImages)
    }
  return (
    <div>
      { count>0 ?  <h1>{count} Files Selected</h1>:
      <h1>Image</h1>
      }
        <p onClick={handleDelete} >Delete</p>
    </div>
  )
}

export default Header