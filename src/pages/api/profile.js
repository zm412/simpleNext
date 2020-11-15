
const models = require('../../../models');
const database = require('../../../database');
const bcrypt = require('bcrypt-nodejs');

export default ((req, res) => {

  console.log(req.body, 'apiProfile');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  console.log(req.body)
  let login = req.body.login;
  let name = req.body.name;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;


  if(!login || !password){
    
        let fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');

    res.end(JSON.stringify({ ok: false, error: 'Empty fields!!!', fields: fields }))
    
  }else{

    models.User.findOne({ login })
      .then(user => {
        if(!user){
          res.end(JSON.stringify({ ok: false, error: 'Wrong login or password', fields:['login', 'password'] }))
        }else{
          bcrypt.compare(password, user.password, (err, result) => {
            if(!result){
              res.end(JSON.stringify({ ok: false, error: 'Wrong login or password', fields:['login', 'password'] }))
            }else{
              res.end(JSON.stringify({ ok: true, error: 'hello', fields:[] }))
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.end(JSON.stringify({ ok: false, error: "Error, try again later!" }))
      });
  }

})