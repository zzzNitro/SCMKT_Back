const axios = require('axios');
const { Contract, User } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');
const e = require('express');
const { condition } = require('sequelize');
const contract = require('../models/contract');
const { NM_HOST, NM_PORT, NM_USER, NM_PASS } = process.env;
const nodemailer = require("nodemailer");
const { formatContracts } = require('./formatContracts')

const transporter = nodemailer.createTransport({
  host: NM_HOST,
  port: NM_PORT,
  secure: true,
  auth: {
    user: NM_USER,
    pass: NM_PASS
  }
});

async function GetContracts(req, res, next) {
  try {
    let { name, author, ownerId, typeC, filterType, filterCategory, filterDurationH, filterDurationL, filterState } = req.query
    let contracts = []
    // page = page ? page : 1
    // const contractsOnPage = 12

    //#region name
    if (name && name !== "") {
      contracts = await Contract.findAll({
        where: {
          conditions: {
            name: {
              [Op.iLike]: `%${name}%`
            }
          }
        },
        include: {
          model: User,
          //attributes: ['id', 'image'],
        }
      })
    } else {
      contracts = await Contract.findAll({
        include: {
          model: User,
          //  attributes: ['id', 'image']
        }
      })
    }
    contracts = formatContracts(contracts)

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

    //#ownerId
    if (ownerId && ownerId !== "") {
      let myContracts = await User.findByPk(ownerId, { include: [Contract] })
      let contractIds = myContracts.Contracts.map((el) => el.id)
      if (typeC === 'all') {
        // Se visualizan todos los contratos publicados
        contracts = contracts.filter(el => el.status === "published" || el.status === "taken")
      } else {
        contracts = contracts.filter(el => contractIds.indexOf(el.id) >= 0)
        contracts = contracts.filter(el => el.status != "deleted")
      }
    } else {
      contracts = contracts.filter(contract => contract.status === 'demo')
    }
    //#endownerId

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
    // //#region PAGE
    // if (page > 1) {
    //   contracts = contracts.slice((contractsOnPage * (page - 1)), (contractsOnPage * (page - 1)) + contractsOnPage)
    // } else {
    //   contracts = contracts.slice(0, (contractsOnPage))
    // }
    // // //#endregion

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

    contracts = formatContracts(found)

    return res.json(contracts);
  } catch (error) {
    return next({ message: error })
  }
};

async function EditContract(req, res, next) {
  const id = req.params.id;
  const { conditions, status, name, email } = req.body;

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
      status: found.status || "unpublished",
      clientId: found.clientId || ""
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
    await transporter.sendMail({
      from: '"SmartContracts" <eberaplicaciones@gmail.com>', // sender address
      to: `${found.email}, ebershr@gmail.com, garciavahos@gmail.com`, // list of receivers
      subject: "Desde el back de scmkt", // Subject line
      text: "Edición de datos", // plain text body
      html: `<b>Hola ${found.name}... Has editado exitosamente tu contrato y queda ${found.status}</b>`, // html body
    });
    res.sendStatus(200)
  } catch (error) {
    res.send(error)
  }
};

async function EditStatusContract(req, res, next) {
  const id = req.params.id;
  const { status, clientId } = req.body;

  try {
    let found = await Contract.findByPk(id)
    const transporter = nodemailer.createTransport({
      host: NM_HOST,
      port: NM_PORT,
      secure: true,
      auth: {
        user: NM_USER,
        pass: NM_PASS
      }
    });

    let updatedContract = await Contract.update({
      status: status,
      clientId: clientId
    },
      { where: { id } }
    )

    await transporter.sendMail({
      from: '"SmartContracts" <eberaplicaciones@gmail.com>', // sender address
      to: `${found.email}, ebershr@gmail.com, garciavahos@gmail.com`, // list of receivers
      subject: `Actualización estado de Contrato ${found.name}`, // Subject line
      text: "Edición de datos", // plain text body
      html: `<b>Hola </br>El estado del contrato ${found.name} se ha modificado satisfactoriamente a ${found.status}</b>`, // html body
    });
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
};

async function DeleteContract(req, res, next) {
  const id = req.params.id;
  const ids = req.body.contract;

  try {
    if (!id) {
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
    console.log(error)
    res.send(error)
  }
}

async function NewContract(req, res) {
  const { wallet1, wallet2, author, conditions, status, ownerId, name, email } = req.body;
  let id = uuidv4();
  let contract = {
    wallet1,
    wallet2,
    author,
    conditions,
    status,
    name,
    email
  }

  try {

    let newC = await Contract.create(contract);

    let user = await User.findByPk(ownerId);
    user.addContracts(newC.id);

    if (!NM_HOST) {
      console.log('Faltan Parámetros')
    } else {
      await transporter.sendMail({
        from: '"SmartContracts" <eberaplicaciones@gmail.com>', // sender address
        to: `${user.email}, ebershr@gmail.com, garciavahos@gmail.com`, // list of receivers
        subject: "Creación de Contrato", // Subject line
        text: "Edición de datos", // plain text body
        html: `<b>Hola ${user.name}... tu contrato ${conditions.name} ha sido creado y se encuentra ${status}</b>`, // html body
      });
    }

    res.json(newC)
  } catch (error) {
    console.log(error)
    return res.send({ message: 'An error occurred in the creation of the contract. Please try again ', status: 500 })
  }
};

module.exports = {
  GetContracts,
  GetContractById,
  EditContract,
  EditStatusContract,
  DeleteContract,
  NewContract
};