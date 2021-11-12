const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { User, Contract } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

router.post('/newUser', async function(req, res) {
  const {name, last_name, username, email, birthday, country, password, wallet, image} = req.body;
  let user = {
    name,
    last_name,
    username,
    email,
    birthday,
    country,
    password,
    wallet,
    image
  }
  
  User.create(user);
});

router.get('/login', async function (req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) return next({ message: 'User and Password is require!', status: 500 });
  try {
    let found = await User.findAll({
      where: {
        [Op.and]: [
          { username: username },
          { password: password }
        ]
      },
      include: {
        model: Contract,
        attributes: ['wallet1', 'wallet2', 'conditions'],
      }
    })

    let user = found.map((el) => {
      let obj = {
        id: el.id,
        name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
        last_name: el.last_name,
        username: el.username,
        contract: el.Contracts
      }
      return obj;
    })

    return (user.length && res.json(user)) || next({ message: 'The username and password are not correct or the user does not exist', status: 500 })
  } catch (error) {
    return next({ message: error })
  }
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params;

  try {
    let found = await User.findByPk(id, { include: [Contract] })

    let user = {
      id: found.id,
      name: found.name.charAt(0).toUpperCase() + found.name.slice(1),
      last_name: found.last_name,
      username: found.username,
      status: found.status,
      contract: found.Contracts
    }

    return res.json(user);
  } catch (error) {
    return next({ message: error })
  }
});

router.put('/edit/:id', async function (req, res, next){
  const id = req.params.id;
  const { name, last_name, username, email } = req.body;
  
  try {
    let found = await User.findByPk(id)
    let user = {
      name: found.name.charAt(0).toUpperCase() + found.name.slice(1),
      last_name: found.last_name,
      username: found.username,
      email: found.email
    }
    let updatedUser = await User.update({
      name: `${ name ? name : user.name }`,
      last_name: `${ last_name ? last_name : user.last_name }`,
      username: `${ username ? username : user.username }`,
      email: `${ email ? email : user.email }`,
      },
      {where: {id}}
    )
    res.send(updatedUser)
  } catch(error){
    res.send(error)
  }
});


router.put('/delete/:id', async function (req, res, next){
  const id = req.params.id;

  try {
    User.update(
      {status: "inactive"},
      {where: {id}}
    )
    
  } catch(error){
    res.send(error)
  }
});

router.get('/', async function (req, res, next) {
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
        name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
        last_name: el.last_name,
        username: el.username,
        status: el.status,
        contract: el.Contracts
      }
      return obj;
    })

    return res.json([...users]);
  } catch(error) {
    return next({ message: error })
  }
});

module.exports = router;
