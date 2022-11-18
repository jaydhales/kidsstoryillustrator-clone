"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./config/config");
const Logger_1 = __importDefault(require("./library/Logger"));
const app = (0, express_1.default)();
app.get('/', (req, res, next) => res.status(200).json({ message: 'Welcome to STORY.AI' }));
app.use((req, res, next) => {
    const error = new Error('Not Found');
    Logger_1.default.error(error);
    return res.status(404).json({ message: error.message });
});
http_1.default.createServer(app).listen(config_1.config.server.port, () => Logger_1.default.info('Server is running on port ' + config_1.config.server.port));
