// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const models = require('../../models');
const bcrypt = require('bcrypt-nodejs');

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}
