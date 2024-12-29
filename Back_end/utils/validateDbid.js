const mongoose = require('mongoose');
const validateDbid = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
        throw new Error('Invalid ID, object not found');
    }
};

module.exports = validateDbid;