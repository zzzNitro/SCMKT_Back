const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Contract, User } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

router.get('/', async function (req, res, next) {
  try {
    let found = await Contract.findAll()

    let contracts = found.map((el) => {
      let contract = {
        id: el.id,
        wallet1: el.wallet1,
        wallet2: el.wallet2,
        conditions: el.conditions,
        status: el.status
      }
      return contract;
    })

    return res.json([...contracts])
   } catch {
    return res.next({ message: 'Some Error' })
  }
});


router.get('/:id', async function (req, res, next) {
  const { id } = req.params;

  try {
    let found = await Contract.findByPk(id, { include: [User] })

    let contract = {
      id: found.id,
      wallet1: found.wallet1,
      wallet2: found.wallet2,
      conditions: found.conditions,
      status: found.status
    }

    return res.json(contract);
  } catch (error) {
    return next({ message: error })
  }
});



module.exports = router;
