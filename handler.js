// handler.js
const { serverless } = require('@probot/serverless-gcf');
const app = require('./index.js')
module.exports.probot = serverless(app)
