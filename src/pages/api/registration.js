
const models = require('../../models');
const database = require('../../../database');
const bcrypt = require('bcrypt-nodejs');

export default (req, res) => {

  console.log(req.body, 'apiRegister');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  let login = req.body.login;
  let password = req.body.password;
  let passwordConfirm = req.body.passwordConfirm;
  let name = req.body.name;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  

  if(!login || !password || !passwordConfirm){
    
        let fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');
        if(!passwordConfirm) fields.push('passwordConfirm');

    res.end(JSON.stringify({ ok: false, error: 'Empty fields!!!', fields: fields }))
    
  } else if(!/^[a-zA-Z0-9]+$/.test(login)){
    
    res.end(JSON.stringify({ ok: false, error: 'Please, use just  latin letters or numbers', fields: ['login'] }));

  } else if(login.length < 3 || login.length > 16){
    res.end(JSON.stringify({ ok: false, error: 'Length of field login has to be longer then 3 and shorter then 16 symbols', fields: ['login'] }));

  } else if(password !== passwordConfirm){
    res.end(JSON.stringify({ ok: false, error: 'Passwords are not equal!', fields: ['password', 'passwordConfirm'] }));

   } else if(password.length < 5){
    res.end(JSON.stringify({ ok: false, error: 'Length of password has not to be less, then 5 symbols', fields: ['password'] }));
    
  }else{

    models.User.findOne({ login })
      .then(user => {
        if(!user){
          bcrypt.hash(password, null, null, (err, hash) => {
            let newUser = { login, password: hash, name, email, phoneNumber };
            models.User.create(newUser)

              .then(user => {
              res.end(JSON.stringify({ ok: true , dataId: user._id}));
              })
              .catch(err => {
              console.log(err);
              res.end(JSON.stringify({ ok: false, error: "Error, try again later!" }));
            });
          });

        }else{
          res.end(JSON.stringify({ ok: false, error: 'Error, this login is already used', fields: ['login'] }));
        }
      });
  }
}




