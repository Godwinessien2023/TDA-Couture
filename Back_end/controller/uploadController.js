const asyncHandler = require('express-async-handler');

// Upload image
const uploadImage = asyncHandler(async (req, res) => {
    if (req.file) {
        res.status(200).json({ message: 'Image uploaded successfully', filePath: `/${req.file.path}` });
    } else {
        res.status(400);
        throw new Error('Image upload failed');
    }
});

module.exports = { uploadImage };