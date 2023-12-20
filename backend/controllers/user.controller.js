import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, LoginUser } from "../schemas/User.js";
import { sendQuery } from "../db/connectDB.js";
import { zodErrorMap } from "../helpers/zodErrorMap.js";
import { HttpError } from "../models/HttpError.js";
import crypto from "node:crypto";
import { log } from "node:console";

// REGISTER
async function signUp(req, res, next) {
  const { success, error, data } = User.safeParse(req.body);

  if (!success) {
    const errors = zodErrorMap(error);
    return res.send({
      ok: false,
      data: null,
      error: errors,
    });
  }

  //Comprobar que el usuario está registrado
  //Comprobar si tiene el dato 'num_colegiado/profesion' --> type_user_id = 2 (prof)
  //Admin (1), Prof. (2), Wom. (3)
  const {
    name,
    surname,
    username,
    email,
    password,
    phone,
    job,
    numCollege,
    userType,
  } = data;

  const salt = 10;
  const hashedPassword = bcrypt.hashSync(password, salt);
  const confirmationCode = crypto.randomUUID();

  try {
    const type_user_id = {
      admin: 1,
      prof: 2,
      user: 3,
    };

    if (userType === "prof") {
      await sendQuery(
        "INSERT INTO users (name, surname, username, email, password, phone, job, numCollege, type_user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          name,
          surname,
          username,
          email,
          hashedPassword,
          phone,
          job,
          numCollege,
          type_user_id["admin"],
        ]
      )
        .then(() => {
          res.send({
            ok: true,
            error: null,
            data: null,
            message: "Usuario registrado correctamente.",
          });
          next();
        })
        .catch((error) => {
          return next(new Error(error.message));
        });
    } else if (userType === "user") {
      await sendQuery(
        "INSERT INTO users (name, surname, username, email, password, phone, type_user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          name,
          surname,
          username,
          email,
          hashedPassword,
          phone,
          type_user_id["user"],
        ]
      )
        .then(() => {
          res.send({
            ok: true,
            error: null,
            data: null,
            message: "Usuario registrado correctamente.",
          });
          next();
        })
        .catch((error) => {
          return next(new Error(error.message));
        });
    }
    next();
  } catch (error) {
    return next(new Error(error.message));
  }
}

// LOGIN
async function logIn(req, res, next) {
  const { success, error, data } = LoginUser.safeParse(req.body);

  if (!success) {
    const errors = zodErrorMap(error);

    return res.status(400).send({
      ok: false,
      data: null,
      message: null,
      error: errors,
    });
  }

  const { email, password: truePassword } = data;

  try {
    const checkEmailInDB = `SELECT *
    FROM users 
        LEFT JOIN data_users
          USING (user_id)
            WHERE email = ?`;

    const [user] = await sendQuery(checkEmailInDB, [email]);

    if (!user) {
      return next(new HttpError(400, "Email y/o contraseña incorrectos"));
    }

    if (!user.isActive) {
      return res.status(403).send({
        message: "This account has been deleted",
        data: null,
      });
    }

    const match = await bcrypt.compare(truePassword, user.password);

    if (!match) {
      return next(new HttpError(400, "Email y/o contraseña incorrectos"));
    }

    const infoUser = {
      id: user.user_id,
      type: user.type_user_id,
    };

    const token = jwt.sign(infoUser, process.env.JWT_SECRET, {
      expiresIn: "1 day",
    });

    infoUser.exp = Date.now() + 1000 * 60 * 60 * 24;

    res.send({
      ok: true,
      message: "Logeado correctamente",
      error: null,
      data: { token, user: infoUser },
    });
  } catch (error) {
    return next(error);
  }
}

async function isLogIn(req, res, next) {
  const { success, error, data } = LoginUser.safeParse(req.body);

  if (!success) {
    const errors = zodErrorMap(error);

    return res.status(400).send({
      ok: false,
      data: null,
      message: null,
      error: errors,
    });
  }

  try {
    const { token } = data;

    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token, user);
    if (!user) {
      return next(new HttpError(400, "User not logged"));
    }

    res.send({
      ok: true,
      message: "User Logged",
      error: null,
      data: { isLogged },
    });
  } catch (error) {
    return next(error);
  }
}

function initialLogin(req, res) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).send({
      error: 'Tienes que enviar cabecera "authorization"',
    });
  }

  const token = authorization.split(" ")[1];

  // verificar el token con JWT
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.send({
      user,
    });
  } catch (error) {
    return res.status(400).send({
      user: null,
      error: "Token inválido o expirado",
    });
  }
}

async function getUserById(req, res, next) {
 
  const { userId } = req.params;

  try {
    const results = await sendQuery("SELECT * FROM users WHERE user_id=?", [
      userId,
    ]);
    console.log(results);
    res.send({
      ok: true,
      message: "Datos del usuario",
      error: null,
      data: results,
    });
    next();
  } catch (error) {
    return next(error);
  }
}

async function findUser(req, res, next) {
  const searchUser = req.body.user;
  const query = `SELECT * FROM users
  WHERE username LIKE ? OR name LIKE ? OR surname LIKE ?`;

  const formattedUser = `%${searchUser}%`;

  try {
    const results = await sendQuery(query, [
      formattedUser,
      formattedUser,
      formattedUser,
    ]);
    res.send({
      ok: true,
      message: "Usuario",
      error: null,
      data: results,
    });
    next();
  } catch (error) {
    return next(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const results = await sendQuery("SELECT * FROM users");
    console.log(results);
    res.send({
      ok: true,
      message: "Lista de usuarios registrados",
      error: null,
      data: results,
    });
    next();
  } catch (error) {
    return next(error);
  }
}


export { signUp, logIn, isLogIn, getUserById, initialLogin, findUser, getAllUsers };
