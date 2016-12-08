var mongoose = require('mongoose')
const Sound = require('./models').Sound
const settings = require('../.config/settings')
const {
  isValidId, isValidString, andErrorOrResults
} = require('./helpers')


mongoose.Promise = global.Promise
mongoose.connect(settings.database)

const _find = (query, socket) => Sound.find(query, andErrorOrResults(socket))

const add = (obj, socket) => {
  var sound = new Sound(obj)
  sound.save(andErrorOrResults(socket))
}

const remove = (id, socket) => {
  if (isValidId(id, socket)) {
    Sound.remove({ id: id }, andErrorOrResults(socket))
  }
}

const update = (obj, socket) => {
  var sound = new Sound(obj)
  if (isValidId(sound._id, socket)) {
    Sound.findOneAndUpdate(
      { id: sound._id }, sound,
      andErrorOrResults(socket)
    )
  }
}

const search = (searchTerm, socket) => {
  if (isValidString(searchTerm, socket)) {
    _find({$text: {$search: searchTerm.toLowerCase()}}, socket)
  }
}

const lookup = (id, socket) => {
  if (isValidId(id, socket)) {
    _find({ id: id }, socket)
  }
}

const searchbyType = (type, socket) => {
  if (isValidString(type, socket)) {
    _find({type: type}, socket)
  }
}

const searchbyAuthor = (author, socket) => {
  if (isValidString(author, socket)) {
    _find({author: author}, socket)
  }
}

module.exports = {
  add,
  remove,
  update,
  search,
  lookup,
  searchbyType,
  searchbyAuthor
}
