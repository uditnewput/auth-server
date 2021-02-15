import mongoose, { Mongoose }  from 'mongoose';

const Application_services = mongoose.model('Application_services', new mongoose.Schema({
    app_id: Number,
    owner_id: Number,
    owner_type: String
}));

export async function createApplicationServices(appId, ownerId, ownerType) {
    const applicationServices = new Application_services({
        appId,
        ownerId,
        ownerType
    });
}

