const fs = require('fs').promises;
const path = require('path');

/**
 * Copia de manera recursiva los archivos y directorios desde el directorio de origen al de destino de forma asíncrona.
 * @param {string} source - Ruta del directorio de origen.
 * @param {string} destination - Ruta del directorio de destino.
 */
async function copyTemplateFiles(source, destination) {
    try {
        // Verifica si el directorio de destino existe; si no, lo crea
        await fs.mkdir(destination, { recursive: true });

        // Lee los archivos y directorios en el directorio de origen
        const items = await fs.readdir(source, { withFileTypes: true });

        for (const item of items) {
            const sourcePath = path.join(source, item.name);
            const destinationPath = path.join(destination, item.name);

            if (item.isDirectory()) {
                // Si es un directorio, realiza una llamada recursiva
                await copyTemplateFiles(sourcePath, destinationPath);
            } else {
                // Si es un archivo, lo copia al directorio de destino
                await fs.copyFile(sourcePath, destinationPath);
            }
        }
    } catch (error) {
        console.error(`Error al copiar archivos: ${error.message}`);
        // Opcionalmente, puedes relanzar el error si quieres que sea manejado más arriba en la cadena
        throw error;
    }
}

module.exports = { copyTemplateFiles };
