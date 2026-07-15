import { Router } from "express";
import ProductManager from "../dao/ProductManager.js"

const router = Router();

const manager = new ProductManager("./productos.json")


router.get("/", async(req, res) => {
    const productos = await manager.mostrarProductos()
    res.render("productos", {
        productos,
        styles: {
            main: "/css/estilos.css"
        }
    })
})

router.get("/chat", async(req, res) => {
    res.render("chat", {
        styles: {
            main: "/css/estilos.css"
        }
    })
})





export default router;