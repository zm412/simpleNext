
const models = require('../../../models');
const database = require('../../../database');

export default ((req, res) => {
  console.log(req.body)

  let id = req.body;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

     models.User.findById({ _id: id })
      .then(user => {
        let letter = {login: user.login, name: user.name, email: user.email, phoneNumber: user.phoneNumber};
        console.log(letter)
            res.end(JSON.stringify(letter))
            })
      .catch(err => {
        console.log(err);
        res.end(JSON.stringify({ ok: false, error: "Error, try again later!" }))
      });

})
