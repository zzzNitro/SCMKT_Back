const axios = require('axios');
const { Contract, User } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');


async function GetContracts (req, res, next) {
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
  };

  async function GetContractById (req, res, next) {
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
  };

  async function EditContract (req, res, next){
    const id = req.params.id;
    const { conditions, status } = req.body;
    

    try {
      let found = await Contract.findByPk(id)
      let contract = {
        conditions: {
          name: found.conditions.name || "not defined",
          shortdescription: found.conditions.shortdescription || "not defined",
          longdescription: found.conditions.longdescription || "not defined",
          amount: found.conditions.amount || "not defined",
          coin: found.conditions.amount || "not defined",
          condition: {
            c1: found.conditions.condition.c1 || "not defined",
            c1: found.conditions.condition.c2 || "not defined"
          }
        },
        status: found.status || "unpublished"
      }

      let updatedContract = await Contract.update({
        conditions: {
          name: `${ conditions.name ? conditions.name : contract.conditions.name }`,
          shortdescription: `${ conditions.shortdescription ? conditions.shortdescription : contract.conditions.shortdescription }`,
          longdescription: `${ conditions.longdescription ? conditions.longdescription : contract.conditions.longdescription }`,
          amount: `${ conditions.amount ? conditions.amount : contract.conditions.amount }`,
          coin: `${ conditions.coin ? conditions.coin : contract.conditions.coin }`,
          condition: {
            c1: `${ conditions.condition.c1 ? conditions.condition.c1 : contract.conditions.condition.c1 }`,
            c2: `${ conditions.condition.c2 ? conditions.condition.c2 : contract.conditions.condition.c2 }`
          }
        },
        status: `${ status ? status : contract.status }`,
        },
        {where: {id}}
      )
      res.sendStatus(200)
    } catch(error){
      res.send(error)
    }
  };

  async function DeleteContract (req, res, next){
    const id = req.params.id;
  
    try {
      await Contract.update(
        {status: "deleted"},
        {where: {id}}
      )
      return res.sendStatus(200)
    } catch(error){
      res.send(error)
    }
  }

  async function NewContract (req, res) {
    const {wallet1, wallet2, conditions, status} = req.body;
    let contract = {
      id: uuidv4(),
      wallet1,
      wallet2,
      conditions,
      status
    }
    
    await Contract.create(contract);

    res.json(contract)
  };

  module.exports = {
    GetContracts,
    GetContractById,
    EditContract,
    DeleteContract,
    NewContract
    };