import {sendQuery} from '../db/connectDB.js'
async function checkUsername(req, res, next){
    const {username} = req.body;
    console.log(req.body)
    try {
      const user = await sendQuery('SELECT * FROM users WHERE username=?', username);
      console.log(user)
      if (user.length > 0) {
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

export default checkUsername;