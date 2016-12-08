var mongoose = require('mongoose')
const Sound = require('./models').Sound
const settings = require('../.config/settings')
const {
  isValidId, isValidString, andErrorOrResults
} = require('./helpers')


mongoose.Promise = global.Promise
mongoose.connect(settings.database)

const _find = (query, socket) => {
  Sound
  .find(query)
  .limit(32)
  .exec(andErrorOrResults(socket))
}

const _searchQuery = searchTerm => ({
  $text: { $search: searchTerm.toLowerCase() }
})

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
    _find(_searchQuery(searchTerm), socket)
  }
}

const lookup = (id, socket) => {
  if (isValidId(id, socket)) {
    _find({ id: id }, socket)
  }
}

const searchbyType = (searchTerm, type, socket) => {
  if (isValidString(type, socket)) {
    var query = _searchQuery(searchTerm)
    query.type = type
    _find(query, socket)
  }
}

const searchbyAuthor = (author, socket) => {
  if (isValidString(author, socket)) {
    var query = _searchQuery(searchTerm)
    query.author = author
    _find(query, socket)
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
