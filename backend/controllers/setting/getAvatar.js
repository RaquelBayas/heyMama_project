import path from 'node:path';
import fs from 'node:fs/promises';

async function getAvatar (req, res) {
    const { nombreArchivo } = req.params;
    const uploadsPath = path.join(process.cwd(), 'src/uploads');
    
    try {
        const files = await fs.readdir(uploadsPath);
        console.log(files);

        const file = files.find(file => file.includes(nombreArchivo))

        if (file) {
            return res.sendFile(path.join(uploadsPath, file))
        }
        res.status(404).send({ error: 'Avatar no existe'})
        
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

export default getAvatar;