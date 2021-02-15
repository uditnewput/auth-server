import mongoose, { Mongoose }  from 'mongoose';

const integration = mongoose.model('Integrations', new mongoose.Schema({
    app_id: Number,
    service_id: Number
}))