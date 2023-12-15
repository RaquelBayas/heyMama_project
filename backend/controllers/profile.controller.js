import { sendQuery } from "../db/connectDB.js";

async function addAvatar (req, res, next) {
  console.log(req)
    // const photo = req.files && req.files.avatar;
    const photo = req.files?.avatar;
    console.log(photo);
    if (!photo) {
      return next(new HttpError(400, 'No has enviado ninguna foto de avatar.'));
    }
  
    const { id: userId } = req.user;
  
    try {
      // comprobamos si el usuario YA TIENE UN AVATAR
      const [result] = await sendQuery('SELECT avatar FROM data_users WHERE user_id = ?', [userId]);
      if (result.avatar) {
        try {
          deletePhoto(result.avatar);
        } catch (error) {
          console.log(error.message);
        }
      }
  
      // guardamos la foto en el servidor
      const avatarFileName = savePhoto(photo, 150);
  
      // guardo en la base de datos la info del nuevo avatr del usuario
      await sendQuery('UPDATE data_users SET avatar = ? WHERE user_id = ?', [avatarFileName, userId]);
  
      res.send({
        ok: true,
        message: 'Avatar añadido correctamente',
        data: null,
        error: null
      });
    } catch (error) {
      console.log(error)
      next(error);
    }
}

async function getDataUser(req, res, next) {
  const {userId} = req.params;
  try {
    const results = await sendQuery('SELECT * FROM data_users WHERE user_id=?', [userId]);
    res.send({
      ok: true,
      message: 'Data del usuario '+userId,
      data: results,
      error: null
    });
    next();
  } catch (error) {
    return next(new Error(error.message));
  }
}

export {addAvatar, getDataUser};