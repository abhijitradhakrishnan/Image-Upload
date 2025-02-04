const cloudinary = require('../utils/cloudinaryConfig');
const streamifier = require('streamifier');

//For uploading images
const upload = (file) => {
    return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream({
            //Specifying the folder uploaded image
            folder: 'files',
            transformation: [{ width:800, height:800, crop:"limit" }]
        },
        (error, result) => {
            if(error) {
                return reject(error)
            } else {
                return resolve(result)
            }
        });
        //Connecting stream variable with cloudinary using streamifier  || Creating pipeline to connect images to cloudinary
        streamifier.createReadStream(file.buffer).pipe(stream)
    });
};

module.exports = upload;