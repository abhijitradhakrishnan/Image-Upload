import React, { useRef, useState } from 'react'
import './Upload.css'
import { IoMdCloudUpload } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import SingleImg from './SingleImg';

const Upload = () => {

//For displaying images on client side
const [preview, setPreview] = useState([])    

const fileChange = async (event) => {
    const files = Array.from(event.target.files)

    //Setting limit
    const slicedFiles = files.slice(0, 6-preview.length)

    //Sending files one by one to the server
    for (let img of slicedFiles) {
        //Updating state variable before calling function
        setPreview(previousPrev => [...previousPrev, "placeholder"]);
        //Calling upload function
        await upload(img)
    }

    //Code with API integration
    async function upload(file) {

        //FormData constructor for body
        const formData = new FormData();
        formData.append('image', file);

        // const response = await fetch('https://localhost:5050/image/upload', {
        //     method: 'POST',
        //     body: formData,
        // });

        // const result = await response.json();
        
        // if(result.message === 'success') {
        //     setPreview(prevPreview => 
        //         prevPreview.map((item, index) => {
        //             return index === prevPreview.length - 1 ? result?.image : item;
        //         })
        //     );
        // }


        try {
            const response = await fetch('http://localhost:5050/image/upload', {
                method: 'POST',
                body: formData,
            });
        
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
        
            const result = await response.json();
            if (result.message === 'success') {
                setPreview(prevPreview =>
                    prevPreview.map((item, index) => {
                        return index === prevPreview.length - 1 ? result?.image : item;
                    })
                );
            } else {
                throw new Error('Upload failed');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error appropriately
        }
        
    }

    //Code without integration of backend
    // //Generating URL
    // files.map((file) => {
    //     const fileReader = new FileReader()
    //     fileReader.onload = (event) => {
    //         //calling convertor [for URL in res]
    //         convertor(event.target.result)
    //     }
    //     fileReader.readAsDataURL(file)
    // });

    // function convertor(file) {
    //     setPreview( prevFile => [...prevFile, file])
    // };
};

//onclicking input - File selection
const inputRef = useRef(null)   

const clickHandler = () => {
    if(inputRef.current) {
        inputRef.current.click()
    }
}

  return (
    <div className='upload_main'>
        <div className='upload_section'>
            <div className="upload_header">
                <span>Media</span>
                <FaImages />
            </div>
            {/* Uploader  */}
            <div onClick={clickHandler} className="uploader">
                <input onChange={fileChange} ref={inputRef} style={{display:'none'}} type="file" multiple accept='image/png, image/jpeg, image/jpg' />
                <IoMdCloudUpload />
                <span>Upload images from 0 to 6</span>
            </div>
            <div className="preview">
                {preview.map((img, index) => {
                    return <SingleImg preview={preview} setPreview={setPreview} index={index} key={index} item={img} />
                })}
            </div>
        </div>      
    </div>
  )
}

export default Upload
