
const models = require('../../../models');
const database = require('../../../database');

export default ((req, res) => {
  console.log(req.body)
  let id = req.body.id;
  let name = req.body.name;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  console.log(name, 'name')

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

     models.User.findOneAndUpdate({ _id: id }, {name: name}, {strict: false, new: true})
      .then(user => {
            console.log(user, 'user!!!')
            res.end(JSON.stringify(user))
            })
      .catch(err => {
        console.log(err);
        res.end(JSON.stringify({ ok: false, error: "Error, try again later!" }))
      });

})
