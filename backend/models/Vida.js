const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const PLM = require('passport-local-mongoose');

const vidaSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    fase1: Object,  
    fase2: Object,
    fase3: Object,
  },
  {
    timestamps: true
  }
)

module.exports = model('Vida', vidaSchema);