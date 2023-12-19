import path from 'node:path';
import sharp from 'sharp';
import multer from 'multer';
import { error } from 'node:console';

const storage = multer.diskStorage({
    destination: function(req, file, done){
        done(null, path.join(process.cwd(), 'uploads'));
    },
    filename: function(req, file, done){
        const avatarNewName = crypto.randomUUID() + path.extname(file.originalname);
        done(null, avatarNewName);
    }
});

const upload = multer({ storage });

function addAvatarPic(req, res) {
    try {
        upload.single('upload')(req, res, async function(err){
            if(err){
                console.error(error);
            }
           
            try {
                await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(path.join(__dirname, `../uploads/${req.file.originalname}`));

                return res.status(201).send('Image uploaded successfully');
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error processing image' });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Bad request' });
    }
}

export default addAvatarPic;