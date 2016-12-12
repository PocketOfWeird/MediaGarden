var mongoose = require('mongoose')
var Schema = mongoose.Schema

const Sound = mongoose.model('Sound', new Schema({
  name: {type: String, text: true, required: true},
  type: {type: String, index: true, required: true},
  keywords: {type: [String], text: true},
  url: {type: String, required: true},
  length: {type: String},
  author: {type: String, index: true}
}))

module.exports = {
  Sound
}
