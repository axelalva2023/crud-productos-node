import fs from "fs/promises";

await fs.writeFile("archivo.txt", "papapapapapa", {encoding: "utf-8"});

const mensaje = await fs.readFile("archivo.txt", {encoding: "utf-8"});

console.log(mensaje);

await fs.appendFile("archivo.txt", "mamamamamamma", {encoding: "utf-8"});

await fs.unlink("archivo.txt")