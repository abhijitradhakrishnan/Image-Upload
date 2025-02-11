import React from 'react'
import './Upload.css'
import { MdOutlineCancel } from "react-icons/md";

const SingleImg = ({item, index, preview, setPreview}) => {

//Image Remove functionality
const deleteHandler = () => {
    //creating copy of an array 
    const copy = [...preview]
    //deleting..
    copy.splice(index, 1)
    //saving the rest after deleteing
    setPreview(copy)
}    
    
  return (
    <div className='single_img'>
      {item !== 'placeholder' && <MdOutlineCancel onClick={deleteHandler} /> }
      {item === 'placeholder' ? <span style={{fontSize:'10px', display:'inline-block', padding:'0.6rem'}}>loading...</span> : <img src={item} />}     
    </div>
  );
};

export default SingleImg;
