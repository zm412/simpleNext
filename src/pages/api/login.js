
const models = require('../../../models');
const database = require('../../../database');
const bcrypt = require('bcrypt-nodejs');
import { sign } from 'jsonwebtoken';

export default ((req, res) => {

  console.log(req.body, 'apiLogin')
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  console.log(req.body)
  let login = req.body.login;
  let password = req.body.password;

  if(!login || !password){
    
        let fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');

    res.end(JSON.stringify({ ok: false, message: 'Empty fields!!!', fields: fields }))
    
  }else{

    models.User.findOne({ login })
      .then(user => {
        if(!user){
          res.end(JSON.stringify({ ok: false, message: 'Wrong login or password', fields:['login', 'password'] }))
        }else{
          bcrypt.compare(password, user.password, (err, result) => {
            if(!result){
              res.end(JSON.stringify({ ok: false, message: 'Wrong login or password', fields:['login', 'password'] }))
            }else{
              const claims = { sub: user._id, login: user.login };
              const jwt = sign(claims, process.env.NEXT_PUBLIC_SECRET_KEY, { expiresIn: '1h' });
              res.end(JSON.stringify({ ok: true, message: 'Wellcome', dataId: user._id, token: jwt }));
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
