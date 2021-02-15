import mongoose, { Mongoose }  from 'mongoose';

const systemService = mongoose.model('System_services', new mongoose.Schema({
    name: String,
    display_name: String
}))