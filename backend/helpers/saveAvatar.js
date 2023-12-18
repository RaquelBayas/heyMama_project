import path from 'node:path';
import fs from 'fs';
import sharp from 'sharp';
import crypto from 'crypto';

const uploadsPath = path.join(process.cwd(), 'src', 'uploads');

function saveAvatar(avatar, size=150){
    
    if(!fs.existsSync(uploadsPath)){
        fs.mkdirSync(uploadsPath)
    }

    const avatarSharp = sharp(avatar.data);

    const { ext } = path.parse(avatar.name);
    const avatarNewName = crypto.randomUUID() + ext;

    const newAvatarPath = path.join(uploadsPath, avatarNewName);

    avatarSharp.resize(size);
    avatarSharp.extract({
        width: size,
        height: size,
        left:0,
        top:0
    }).toFile(newAvatarPath, (err) => {
    if (err) {
        console.error('Error saving avatar:', err);
        reject(err);
    } else {
        resolve(avatarNewName);
    }
});
}

export default saveAvatar;