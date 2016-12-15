const ftls = require('./ftsl')
const uniqBy = require('lodash.uniqby')
const { authorizedUser } = require('./auth')
const settings = require('../.config/settings')
const {
  isValidId, isValidString, emitState, emitError, emitAdded, emitRemoved
} = require('./helpers')


const db_file = settings.databaseFile
let database
try {
  database = ftls.load(db_file)
} catch (e) {
  console.error('Error loading database file:', e)
}

const save = (socket, added) => {
  try {
    const addedSound = database.save(db_file, added)
    if (addedSound) emitAdded(addedSound, socket)
    else emitRemoved(socket)
    return true
  } catch (e) {
    emitError(e, socket)
    return false
  }
}
const add = (userInfo, obj, socket) => {
  var sound = Object.assign({}, obj)
  sound.id = database.add(sound)
  sound.addedBy = userInfo.user
  sound.addedOn = new Date(Date.now()).toDateString()
  return save(socket, sound)
}

const remove = (userInfo, id, socket) => {
  if (isValidId(id, socket) && authorizedUser(userInfo)) {
    database.remove(id)
    return save(socket)
  }
  return false
}

const update = (userInfo, obj, socket) => {
  if (isValidId(obj.id, socket)) {
    if (remove(userInfo, obj.id, socket)) {
      return add(userInfo, obj, socket)
    }
  }
}

const search = (searchTerm, socket) => {
  if (isValidString(searchTerm, socket)) {
    emitState(uniqBy(database.search(searchTerm), 'url').slice(0,32), socket)
  }
}


module.exports = {
  add,
  remove,
  update,
  search
}
