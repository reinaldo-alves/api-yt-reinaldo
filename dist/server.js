"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const videos_routes_1 = require("./routes/videos.routes");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Seja bem vindo à API do Youtube by Reinaldo Alves");
});
app.use('/user', user_routes_1.userRoutes);
app.use('/videos', videos_routes_1.videosRoutes);
app.listen(port);
