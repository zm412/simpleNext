
const models = require('../../../models');
const database = require('../../../database');

export default ((req, res) => {
  console.log(req.body)
  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;

  let newInfo = ['name', 'email', 'phoneNumber'].reduce((obj, current) =>{
    console.log(req.body[current])
      if(req.body[current] != ''){
        obj[current] = req.body[current];
      }
    return obj;
  }, {});

  console.log(newInfo)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

     models.User.findOneAndUpdate({ _id: id }, newInfo, {strict: false, new: true})
      .then(user => {
            console.log(user, 'user!!!')
            res.end(JSON.stringify(user))
            })
      .catch(err => {
        console.log(err);
        res.end(JSON.stringify({ ok: false, error: "Error, try again later!" }))
      });

})
