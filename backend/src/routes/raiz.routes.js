import { Router } from "express";

const router = Router()

router.get("/", async(req, res) => {
    res.send("Hola desde la raiz");
})

router.post("/", async(req, res) => {
    console.log(req.body)
})









export default router;