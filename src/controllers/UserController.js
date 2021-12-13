const { User, Contract } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');
const axios = require('axios');
const jwt = require('express-jwt')
const jwks = require('jwks-rsa');
const cors = require('cors');
const sgMail = require('../services/sendgrid');
const { NM_HOST, NM_PORT, NM_USER, NM_PASS } = process.env;
const nodemailer = require("nodemailer");
console.log('Enviando emails')

async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();


const transporter = nodemailer.createTransport({
    host: NM_HOST,
    port: NM_PORT,
    secure: true,
    auth: {
        user: NM_USER,
        pass: NM_PASS
    }
});

}

const verifyJwt = jwt({

  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-a8q5pol6.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'SCMKT',
  issuer: 'https://dev-a8q5pol6.us.auth0.com/',
  algorithms: ['RS256']
}).unless({ path: ['/'] });



async function NewUser(req, res) {
  const { name, last_name, username, email, birthday, country, password, wallet, image } = req.body;
  let user = {
    id: uuidv4(),
    name,
    last_name,
    username,
    email,
    birthday,
    country,
    password,
    wallet,
    image,
    status: 'active'
  }
  try {
    const transporter = nodemailer.createTransport({
      host: NM_HOST,
      port: NM_PORT,
      secure: true,
      auth: {
          user: NM_USER,
          pass: NM_PASS
      }
  });
    console.log(user)
    await transporter.sendMail({
      from: '"SmartContracts" <eberaplicaciones@gmail.com>', // sender address
      to: `${user.email}, ebershr@gmail.com, garciavahos@gmail.com`, // list of receivers
      subject: "Creación de usuario", // Subject line
      text: "Edición de datos", // plain text body
      html: `<b>Hola ${user.name}... Has sido creado correctamente</b>`, // html body
    });
    return res.json(User.create(user))
  } catch (error) {
    res.send({ message: 'Error' })
  }
};

async function GetUsers(req, res, next) {
  try {
    let found = await User.findAll({
      // where: {
      //   status: {
      //     [Op.eq]: "active"
      //   }
      // },
      include: {
        model: Contract,
        attributes: ['wallet1', 'wallet2', 'conditions'],
      }
    })

    let users = found.map((el) => {
      let obj = {
        id: el.id,
        name: el.name, //.charAt(0).toUpperCase() + el.name.slice(1),
        last_name: el.last_name,
        username: el.username,
        email: el.email,
        image: el.image,
        status: el .status
      }
      return obj;
    })

    return res.json([...users]);
  } catch (error) {
    return next({ message: error })
  }
};

async function LoginUser(req, res, next) {
  //const { username, password } = req.body;

  /*
  if (!username || !password) return next({ message: 'User and Password is require!', status: 500 });
  */

  try {
    // console.log('req.headers', req.headers)
    const accessToken = req.headers.authorization?.split(' ')[1];
    // console.log('accessToken', accessToken)
    const response = await axios.get('https://dev-a8q5pol6.us.auth0.com/userinfo', {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
    const userinfo = response.data;

    let found = await User.findOne({
      where: { email: userinfo.email },
      include: {
        model: Contract,
        attributes: ['id', 'wallet1', 'wallet2', 'author', 'conditions', 'status'],
      }
    })
    // console.log('found', found)
    let user = {};
    if (!found) {
      //Add new user
      user = {
        id: uuidv4(),
        username: userinfo.nickname,
        email: userinfo.email,
        name: userinfo.nickname,
        last_name: "",
        status: 'active'
      }
      try {
         const transporter = nodemailer.createTransport({
      host: NM_HOST,
      port: NM_PORT,
      secure: true,
      auth: {
          user: NM_USER,
          pass: NM_PASS
      }
  });
    await transporter.sendMail({
    from: '"SmartContracts" <eberaplicaciones@gmail.com>', // sender address
    to: `${userinfo.email}, ebershr@gmail.com, garciavahos@gmail.com`, // list of receivers
    subject: "Login de usuario", // Subject line
    text: "Edición de datos", // plain text body
    html: `<b>Hola ${userinfo.name}... Si recibiste este correo es porque te has logueado exitosamente</b>`, // html body
  });
        return res.json(User.create(user))
      } catch (error) {
        res.next({ message: error })
      }
    } else {
      // console.log('found.dataValues', found.dataValues)
      user = {
        id: found.dataValues.id,
        name: found.dataValues.name,//.charAt(0).toUpperCase() + found.dataValues.name.slice(1),
        last_name: found.dataValues.last_name,
        username: found.dataValues.username,
        email: found.dataValues.email,
        country: found.dataValues.country,
        wallet: found.dataValues.wallet,
        image: found.dataValues.image,
        status: found.dataValues.status,
        contracts: found.dataValues.Contracts.filter(el => el.status != "deleted" )
      }
    }

    return (user && res.json(user)) || next({ message: 'The username and password are not correct or the user does not exist', status: 500 })
  } catch (error) {
    return next({ message: error })
  }
};

async function deactivateUser(req, res, next) {

  const id = req.params.id;

  try {
    User.update(
      { status: "inactive" },
      { where: { id } }
    )
    res.sendStatus(200)
  } catch (error) {
    res.send(error)
  }
};

async function editUser(req, res, next) {
  const id = req.params.id;
  const { name, last_name, country, wallet, image, email } = req.body;

  try {
    let found = await User.findByPk(id)

    let user = {
      name: found.name, //.charAt(0).toUpperCase() + found.name.slice(1),
      last_name: found.last_name,
      country: found.country,
      wallet: found.wallet,
      image: found.image,
      email: found.email
    }

    const transporter = nodemailer.createTransport({
      host: NM_HOST,
      port: NM_PORT,
      secure: true,
      auth: {
          user: NM_USER,
          pass: NM_PASS
      }
  });

    let updatedUser = await User.update({
      name: `${name !== '' ? name : user.name}`,
      last_name: `${last_name !== '' ? last_name : user.last_name}`,
      country: `${country !== '' ? country : user.country}`,
      wallet: `${wallet !== '' ? wallet : user.wallet}`,
      image: `${image !== '' ? image : user.image}`,
      email: `${email !== '' ? email : user.email}`

    },
      { where: { id } }
    )

    await transporter.sendMail({
      from: '"SmartContracts" <eberaplicaciones@gmail.com>', // sender address
      to: `${user.email}, ebershr@gmail.com, garciavahos@gmail.com`, // list of receivers
      subject: "Desde el back de scmkt", // Subject line
      text: "Edición de datos", // plain text body
      html: `<b>Hola ${user.name}... Has editado tus datos exitosamente</b>`, // html body
    });
    
    res.sendStatus(200)

    

  } catch (error) {
    res.send(error)
  }
};




async function getUserById(req, res, next) {
  const { id } = req.params;

  try {
    let found = await User.findByPk(id, { include: [Contract] })

    let user = {
      id: found.id,
      name: found.name, //.charAt(0).toUpperCase() + found.name.slice(1),
      last_name: found.last_name,
      username: found.username,
      email: found.email,
      country: found.country,
      wallet: found.wallet,
      image: found.image,
      contract: found.Contracts,
      status: found.status
    }

    return res.json(user);
  } catch (error) {
    return next({ message: error })
  }
};

async function getUserByEmail(req, res, next) {
  const { email } = req.params;

  try {
    let found = await User.findOne({
      where: {
          email: {
              [Op.iLike]: `%${email}%`
            }
          }
        })

    return res.send(found.id);
  } catch (error) {
    return next({ message: error })
  }
};

async function sendMail(req, res) {
  const { to, subject, text, html, sandboxMode = false } = req.body;

  const msg = {
    to,
    from: 'contacto@dexforge.com',
    subject,
    text,
    html,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode
      }
    }
  };

  try {
    await sgMail.send(msg)
  } catch (err) {
    return res.status(err.code).send(err.message)
  }

  res.status(201).send({success: true})
}

module.exports = {
  NewUser,
  GetUsers,
  LoginUser,
  deactivateUser,
  editUser,
  getUserById,
  getUserByEmail,
  sendMail

};

