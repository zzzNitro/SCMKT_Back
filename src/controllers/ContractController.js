const axios = require('axios');
const { Contract, User } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');
const e = require('express');
const { condition } = require('sequelize');
const contract = require('../models/contract');


async function GetContracts(req, res, next) {
  try {
    let { page, name, author, filterType, filterCategory, filterDurationH, filterDurationL, filterState } = req.query
    let contracts = []
    page = page ? page : 1
    const contractsOnPage = 12

    //#region name
    if (name && name !== "") {
      // console.log(`Entro al if con name = ${name}`)
      contracts = await Contract.findAll({
        where: {
          conditions: {
            name: {
              [Op.iLike]: `%${name}%`
            }
          }
        },
        include: User.id
      })
    } else {
      contracts = await Contract.findAll(/*{ include: User.name }*/)
    }
    //#endregion

    //#region author
    // if (author && author !== "") {
    //   console.log(`Entro al if con author = ${author}`)
    //   contracts = await Contract.findAll({
    //       where: {
    //           author: {
    //               [Op.iLike]: `%${author}%`
    //             }
    //       },
    //   })
    // } else {
    //   contracts = await Contract.findAll(/*{ include: User.name }*/)
    // }
    //#endregion

    //#region type
    if (filterType && filterType !== "") {
      // console.log(`Entro al if con type = ${filterType}`)
      contracts = contracts.filter(contract => contract.conditions.type === filterType)
    }
    //#endregion

    //#region category
    if (filterCategory && filterCategory !== "") {
      // console.log(`Entro al if con category = ${filterCategory}`)
      contracts = contracts.filter(contract => contract.conditions.category === filterCategory)
    }
    //#endregion

    //#region Higher Duration
    if (filterDurationH && filterDurationH !== "") {
      // console.log(`Entro al if con duration = ${filterDurationH}`)
      contracts = contracts.filter(contract => contract.conditions.duration >= filterDurationH)
    }
    //#endregion

    //#region Lower Duration
    if (filterDurationL && filterDurationL !== "") {
      // console.log(`Entro al if con duration = ${filterDurationL}`)
      contracts = contracts.filter(contract => contract.conditions.duration <= filterDurationL)
    }
    //#endregion

    //#region state
    if (filterState && filterState !== "") {
      // console.log(`Entro al if con state = ${filterState}`)
      contracts = contracts.filter(contract => contract.status === filterState)
    }
    //#endregion
    /*
          let found = await Contract.findAll()
      
          contracts = found.map((el) => {
            let contract = {
              id: el.id,
              wallet1: el.wallet1,
              wallet2: el.wallet2,
              conditions: el.conditions,
              status: el.status
            }
            return contract;
          })
    */
    //#region PAGE
    if (page > 1) {
      contracts = contracts.slice((contractsOnPage * (page - 1)), (contractsOnPage * (page - 1)) + contractsOnPage)
    } else {
      contracts = contracts.slice(0, (contractsOnPage))
    }
    // //#endregion

    // return res.send({
    //     all: contracts,
    //     result: result,
    //     count: contracts.length
    // })

    return res.json(contracts)
  } catch (error) {
    console.log(error)
    next(error)
  }
};

async function GetContractById(req, res, next) {
  const { id } = req.params;

  try {
    let found = await Contract.findByPk(id, { include: [User] })

    let contract = {
      id: found.id,
      wallet1: found.wallet1,
      wallet2: found.wallet2,
      author: found.author,
      conditions: found.conditions,
      status: found.status
    }

    return res.json(contract);
  } catch (error) {
    return next({ message: error })
  }
};

async function EditContract(req, res, next) {
  const id = req.params.id;
  const { conditions, status } = req.body;


  try {
    let found = await Contract.findByPk(id)
    let contract = {
      conditions: {
        name: found.conditions.name || "not defined",
        type: found.conditions.type || "not defined",
        duration: found.conditions.duration || "not defined",
        category: found.conditions.category || "not defined",
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
        name: `${conditions.name ? conditions.name : contract.conditions.name}`,
        type: `${conditions.type ? conditions.type : contract.conditions.type}`,
        duration: `${conditions.duration ? conditions.duration : contract.conditions.duration}`,
        category: `${conditions.category ? conditions.category : contract.conditions.category}`,
        shortdescription: `${conditions.shortdescription ? conditions.shortdescription : contract.conditions.shortdescription}`,
        longdescription: `${conditions.longdescription ? conditions.longdescription : contract.conditions.longdescription}`,
        amount: `${conditions.amount ? conditions.amount : contract.conditions.amount}`,
        coin: `${conditions.coin ? conditions.coin : contract.conditions.coin}`,
        condition: {
          c1: `${conditions.condition.c1 ? conditions.condition.c1 : contract.conditions.condition.c1}`,
          c2: `${conditions.condition.c2 ? conditions.condition.c2 : contract.conditions.condition.c2}`
        }
      },
      status: `${status ? status : contract.status}`,
    },
      { where: { id } }
    )
    res.sendStatus(200)
  } catch (error) {
    res.send(error)
  }
};

async function DeleteContract(req, res, next) {
  const id = req.params.id;

  try {
    if (!id) {
      const ids = req.body.contract;
      await Contract.update(
        { status: "deleted" },
        {
          where: {
            id: { [Op.in]: ids }
          }
        }
      )
    } else {
      await Contract.update(
        { status: "deleted" },
        { where: { id } }
      )
    }
    return res.sendStatus(200)
  } catch (error) {
    res.send(error)
  }
}


async function NewContract(req, res) {
  const { wallet1, wallet2, author, conditions, status, ownerId } = req.body;
  let id = uuidv4();
  let contract = {
    id,
    wallet1,
    wallet2,
    author,
    conditions,
    status
  }

  try {
    await Contract.create(contract);

    let user = await User.findByPk(ownerId);
    user.addContracts(id);

    res.json(contract)
  } catch (error) {
    console.log(error)
    return res.send({ message: 'An error occurred in the creation of the contract. Please try again ', status: 500 })
  }
};

module.exports = {
  GetContracts,
  GetContractById,
  EditContract,
  DeleteContract,
  NewContract
};