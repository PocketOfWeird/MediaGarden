const CAS = require('simple-cas-interface')
const jwt = require('jsonwebtoken')
const settings = require('../.config/settings')


const cas = new CAS({
  serverUrl: settings.cas_url,
  serviceUrl: settings.url + 'casHandler'
})

const unauthorized = (res) => res.redirect('/#/unauthorized')

const authorizedUser = userInfo => settings.allowedUsers.includes(userInfo.user)

const auth = app => {
  app.get('/login', (req, res) => res.redirect(cas.loginUrl))
  app.get('/logout', (req, res) => res.redirect(settings.cas_url + 'logout'))
  app.get('/casHandler', (req, res) => {
    cas.validateServiceTicket(req.query.ticket)
    .then(userInfo => {
      // the ticket successfully authenticated
      if (authorizedUser(userInfo)) {
        const token = jwt.sign(userInfo, settings.secret, { expiresIn: '8h' })
        return res.redirect('/#/authorized?data=' + token)
      }
      return unauthorized(res)
    })
    .catch(error => {
      // the ticket did not authenticate
      return unauthorized(res)
    })
  })
}

module.exports = { auth, authorizedUser }
