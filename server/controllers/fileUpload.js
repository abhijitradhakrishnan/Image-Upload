//File uploading controller  and  for calling this controller routes is needed
const { image } = require('../utils/cloudinaryConfig');
const upload = require('../utils/upload');

const uploadFile = async (req, res, next) => {
    try {
        if (!req.file) {
            const error = new Error('Please provide an image');
            error.statusCode = 400;
            throw error;
        }

        const result = await upload(req.file); // Upload the image to Cloudinary
        res.status(200).json({ message: 'success', image: result?.secure_url });

    } catch (error) {
        next(error); // Pass the error to the middleware for proper handling
    }
};

module.exports = uploadFile;
