import {sendQuery} from '../db/connectDB.js'
checkUsername = async (req, res, next) => {
    const {username} = req.body;
    try {
      const user = await sendQuery('SELECT * FROM users WHERE username=?', [username]);
  
      if (user) {
        return res.status(400).send({
          message: "Se ha producido un error. Nombre de usuario no disponible.",
        });
      }
      next();
    } catch (error) {
      return res.status(500).send({
        message: error.message,
      });
    }
  };

export {checkUsername};