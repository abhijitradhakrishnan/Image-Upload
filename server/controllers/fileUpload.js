//File uploading controller  and  for calling this controller routes is needed
const { image } = require('../utils/cloudinaryConfig');
const upload = require('../utils/upload');

const uploadFile = async(req, res, next) => {
    if(!req.file){
        const error = new  Error('Please provide a image')
        error.statusCode = 400
        throw error
    }

    const result = await upload(req.file);

    res.status(200).json({message: 'success', image: result?.secure_url});
};

module.exports = uploadFile;