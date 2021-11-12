const { User, Contract } = require('../db');

async function NewUser (req, res) {
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
  };

  async function GetUsers (req, res, next) {
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
          username: el.username
        }
        return obj;
      })
  
      return res.json([...users]);
    } catch(error) {
      return next({ message: error })
    }
  };

  async function LoginUser (req, res, next) {
    const { username, password } = req.body;
  
    if (!username || !password) return next({ message: 'User and Password is require!', status: 500 });
    try {
      let found = await User.findAll({
        where: {
          username: username,
          password: password
        },
        include: {
          model: Contract,
          attributes: ['wallet1', 'wallet2', 'conditions'],
        }
      })
  
      return (found.length > 0 && res.json(found)) || next({ message: 'The username and password are not correct or the user does not exist', status: 500 })
    } catch (error) {
      return next({ message: error })
    }
  };
  

  module.exports = {
    NewUser,
    GetUsers,
    LoginUser
};

