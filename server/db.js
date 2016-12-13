const ftls = require('./ftsl')
const uniqBy = require('lodash.uniqby')
const settings = require('../.config/settings')
const {
  isValidId, isValidString, emitState, emitError, emitAdded, emitRemoved
} = require('./helpers')


const db_file = 'server/database.json'
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
const add = (obj, socket) => {
  var sound = Object.assign({}, obj)
  sound.id = database.add(sound)
  return save(socket, sound)
}

const remove = (id, socket) => {
  if (isValidId(id, socket)) {
    database.remove(id)
    return save(socket)
  }
  return false
}

const update = (obj, socket) => {
  if (isValidId(obj.id, socket)) {
    if (remove(obj.id, socket)) {
      return add(obj, socket)
    }
  }
}

const search = (searchTerm, socket) => {
  if (isValidString(searchTerm, socket)) {
    emitState(uniqBy(database.search(searchTerm), 'url').slice(0,64), socket)
  }
}


module.exports = {
  add,
  remove,
  update,
  search
}
