

const formatContracts = (contracts) => {
  let contractsFormat

  if (Array.isArray(contracts)) {
    contractsFormat = contracts?.map(element => {
      console.log('element.Users', element)
      let obj = {
        //id: element.id,
        wallet1: element.wallet1,
        wallet2: element.wallet2,
        author: element.author,
        conditions: {
          name: element.conditions.name,
          shortdescription: element.conditions.shortdescription,
          longdescription: element.conditions.longdescription,
          amount: element.conditions.amount,
          coin: element.conditions.coin,
          condition: {
            c1: element.conditions.condition.c1,
            c2: element.conditions.condition.c2
          }
        },
        status: element.status,
        owner: {
          //id: element.Users[0].id,
          name: element.Users[0].name_show ? element.Users[0].name : '',
          last_name: element.Users[0].name_show ? element.Users[0].last_name : '',
          email: element.Users[0].email_show ? element.Users[0].email : '',
          birthday: element.Users[0].birthday_show ? element.Users[0].birthday : '',
          country: element.Users[0].country_show ? element.Users[0].country : '',
          wallet: element.Users[0].wallet,
          image: element.Users[0].image,
          status: element.Users[0].status
        }
      }

      return obj
    })
  } else {
    contractsFormat = {
      //id: contracts.id,
      wallet1: contracts.wallet1,
      wallet2: contracts.wallet2,
      author: contracts.author,
      conditions: {
        name: contracts.conditions.name,
        shortdescription: contracts.conditions.shortdescription,
        longdescription: contracts.conditions.longdescription,
        amount: contracts.conditions.amount,
        coin: contracts.conditions.coin,
        condition: {
          c1: contracts.conditions.condition.c1,
          c2: contracts.conditions.condition.c2
        }
      },
      status: contracts.status,
      owner: {
        //id: contracts.Users[0].id,
        name: contracts.Users[0].name_show ? contracts.Users[0].name : '',
        last_name: contracts.Users[0].name_show ? contracts.Users[0].last_name : '',
        email: contracts.Users[0].email_show ? contracts.Users[0].email : '',
        birthday: contracts.Users[0].birthday_show ? contracts.Users[0].birthday : '',
        country: contracts.Users[0].country_show ? contracts.Users[0].country : '',
        wallet: contracts.Users[0].wallet,
        image: contracts.Users[0].image,
        status: contracts.Users[0].status
      }
    }
  }

  return contractsFormat
}

module.exports = {
  formatContracts
};

