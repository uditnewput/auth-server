"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = express_1.default();
const PORT = 3001;
const MONGODB_URI = 'aws:secretsmanager:us-east-1:773490068169:secret:tuvoli/dev/widgets-service/mongodb_uri-D0ET3H';
const MONGODB_DATABASE = 'tuvoli-widgets';
const dbURL = `mongodb://${MONGODB_URI}:27017/${MONGODB_DATABASE}`;
server.get('/', (req, res) => {
    res.send('Hi, it\'s working');
});
mongoose_1.default.connect(`${dbURL}?authSource=admin&retryWrites=true`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
db.on('connected', (err, res) => {
    console.log('mongoose connection established...');
});
db.on('error', err => {
    console.log(err + '...mongoose error encountered');
});
server.listen(PORT, null, () => {
    console.log(`Server is listening on ${PORT}`);
});
process.on('uncaughtException', (error) => {
    console.log(error);
});
process.on('unhandledRejection', (error) => {
    console.log(error);
});
//# sourceMappingURL=server.js.map