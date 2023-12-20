import fs from 'node:fs';
import path from 'node:path';

function deleteAvatar (avatar){
    const uploadsPath = path.join(process.cwd(), 'src', 'uploads');

    const avatarPath = path.join(uploadsPath, avatar);

    if(!fs.existsSync(avatarPath)){
        throw new Error('No se ha podido borrar la foto del servidor porque no existe')
    }

    fs.unlinkSync(avatarPath);
}

export default deleteAvatar;