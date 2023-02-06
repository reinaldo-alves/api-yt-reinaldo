import express from 'express'
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';

config();
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.get("/", function (req, res) {
    res.send("Seja bem vindo à API do Youtube by Reinaldo Alves");
});

app.use('/user', userRoutes);
app.use('/videos', videosRoutes);

app.listen(port)