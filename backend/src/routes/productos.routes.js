import { Router } from "express";
import ProductManager from "../dao/ProductManager.js"

const router = Router();

const manager = new ProductManager("./productos.json");

router.get("/", async(req, res) => {
    try{
        res.status(200).json(await manager.mostrarProductos());
    }catch{
        console.log("Error al mostrar productos")
    }
})

router.get("/:id", async(req, res) => {
    const pk = req.params.id
    const productos = await manager.mostrarProductos()
    const encontrado = productos.find(el => el.id == parseInt(pk));
    try{
        res.status(200).json(encontrado);
    }catch{
        console.log("Error no se puede mostrar el producto")
    }

})

router.post("/", async (req, res) => {
    const cuerpo = req.body;

    try {
        await manager.addProductos(cuerpo);
        res.status(201).json({ mensaje: "Producto agregado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Error al cargar un producto" });
    }
});

router.put("/:id", async(req, res) => {
    const pk = req.params.id
    const cuerpo = req.body
    try{
        await manager.updateProductos(pk,cuerpo)
    }catch{
        console.log("Error no se puede actualizar el producto")
    }    
})

router.delete("/:id", async (req, res) => {
    const pk = Number(req.params.id);

    try {
        await manager.deleteProductos(pk);
        res.status(200).json({ mensaje: "Producto eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Error al eliminar el producto" });
    }
});


export default router;