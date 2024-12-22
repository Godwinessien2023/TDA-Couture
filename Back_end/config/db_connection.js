const { default: mongoose} = require ('mongoose')

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.CONN_STRING);
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Error: ', error.message);
    }
};

module.exports = dbConnect;
