const { User, Contract } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');
const axios = require('axios');
const jwt = require('express-jwt')
const jwks = require('jwks-rsa');
const cors = require('cors');

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
    console.log(user)
    return res.json(User.create(user))
  } catch (error) {
    res.send({ message: 'Error' })
  }
};

async function GetUsers(req, res, next) {
  try {
    let found = await User.findAll({
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
        username: el.username
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

    console.log('userinfo', userinfo);

    let found = await User.findOne({
      where: { email: userinfo.email },
      include: {
        model: Contract,
        attributes: ['wallet1', 'wallet2', 'conditions'],
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
        return res.json(User.create(user))
      } catch (error) {
        res.send({ message: 'Error' })
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
        contracts: found.dataValues.Contracts
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
  const { name, last_name, country, wallet, image } = req.body;

  try {
    let found = await User.findByPk(id)
    let user = {
      name: found.name, //.charAt(0).toUpperCase() + found.name.slice(1),
      last_name: found.last_name,
      country: found.country,
      wallet: found.wallet,
      image: found.image
    }
    let updatedUser = await User.update({
      name: `${name ? name : user.name}`,
      last_name: `${last_name ? last_name : user.last_name}`,
      country: `${country ? country : user.country}`,
      wallet: `${wallet ? wallet : user.wallet}`,
      image: `${image ? image : user.image}`
    },
      { where: { id } }
    )
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

module.exports = {
  NewUser,
  GetUsers,
  LoginUser,
  deactivateUser,
  editUser,
  getUserById,
  getUserByEmail

};

