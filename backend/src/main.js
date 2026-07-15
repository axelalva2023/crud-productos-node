import express from "express";
import raizRouter from "./routes/raiz.routes.js";
import productosRouter from "./routes/productos.routes.js";
import viewsRouter from "./routes/views.routes.js"
import __dirname from "./utils.js";
import handlebars from "express-handlebars"
import { Server } from "socket.io"
import mongoose from "mongoose";
import cors from "cors"


const servidor = express();

const httpServer = servidor.listen("3000", () => console.log("Corriendo el servidor exitosamente"));
 try{
    await mongoose.connect("mongodb://axelalva:AQY0efUw57tGflSJ@ac-5rdxobo-shard-00-00.bcryxcu.mongodb.net:27017,ac-5rdxobo-shard-00-01.bcryxcu.mongodb.net:27017,ac-5rdxobo-shard-00-02.bcryxcu.mongodb.net:27017/?ssl=true&replicaSet=atlas-1159a3-shard-0&authSource=admin&appName=Backend1")
    console.log("Conectado exitosamente a Mongo")}catch(error){
    console.log("Error al conectar con Mongo", error)
 }

servidor.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layout"
}))
servidor.set("view engine", "handlebars")
servidor.set("views", __dirname + "/views")

servidor.use(cors());

servidor.use(express.static(__dirname + "/public"));

servidor.use(express.json());

servidor.use("/", raizRouter);

servidor.use("/productos", productosRouter);

servidor.use("/vistas", viewsRouter);

const servidorSocket = new Server(httpServer);

servidorSocket.on("connection", async(client) => {
    console.log("Un cliente se ha conectado:", client.id)
})

