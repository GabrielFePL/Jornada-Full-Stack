import express from "express";
import { db } from "./connect.js";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api', (req, res) => {
    res.send("Home End Point");
})
app.get('/api/artists', async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
})
app.get('/api/songs', async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
})

app.use(express.static(path.join(__dirname, '../Front-End/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-End/dist/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
