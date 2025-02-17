import { MongoClient } from "mongodb";

const URI = "mongodb+srv://gabriellarocca0:yCXzLWg7ljWZhUjq@jornada-full-stack.kjgxb.mongodb.net/?retryWrites=true&w=majority&appName=Jornada-Full-Stack";

const client = new MongoClient(URI);

export const db = client.db("jornada_full_stack_db");
