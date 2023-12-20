import jwt from 'jsonwebtoken';

function userAuth ( req, res, next) {
    const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).send({
      error: 'Tienes que enviar cabecera "authorization"'
    })
  }

  const token = authorization.split(' ')[1];

  // verificar el token con JWT
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
   
    req.user = user;
    next();

  } catch (error) {
    return res.status(400).send({
      user: null,
      error: 'Token inválido o expirado'
    })
  }
}

export default userAuth;