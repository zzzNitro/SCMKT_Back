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
        conditions: found.conditions,
        status: found.status
      }
      let updatedContract = await Contract.update({
        conditions: `${ conditions ? conditions : contract.conditions }`,
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
      wallet1,
      wallet2,
      conditions,
      status
    }
    
    await Contract.create(contract);
    res.sendStatus(200)
  };

  module.exports = {
    GetContracts,
    GetContractById,
    EditContract,
    DeleteContract,
    NewContract
    };