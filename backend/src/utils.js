import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import multer from "multer";

const fileName = fileURLToPath(import.meta.url)

const __dirname = dirname(fileName)

export default __dirname

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, __dirname + "/public/img")
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

export const uploader = multer({storage});
