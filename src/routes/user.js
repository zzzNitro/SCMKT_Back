const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { User } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

router.get('/', async function (req, res, next) {
  try {
    return res.send({ message: 'Estoy en User' })
  } catch {
    return next({ message: 'Some Error' })
  }
});

router.get('/login', async function (req, res, next) {
  const { user, password } = req.body;

  if (!user || !password) return next({ message: 'User and Password is require!', status: 500 });
  try {
    let found = await User.findAll({
      where: {
        user: user,
        password: password
      },
      include: {
        model: Contract,
        attributes: ['user', 'name'],
      }
    })
    
    return (found.length > 0 && res.json(found)) || next({ message: 'The username and password are not correct or the user does not exist', status: 500 })
  } catch(error) {
    return next({ message: error })
  }
});

module.exports = router;
