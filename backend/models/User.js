const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    role: {
      type: String,
      enum: ['Coachee', 'Coach'],
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Confirmación pendiente', 'Activo'],
      default: 'Confirmación pendiente'
    },
    confirmationCode: String,
    image: {
      type: String
    },
    project: String,
    ocupation: String,
    dob: {
      type: Date,
      default: new Date()
    },
    modified: {
      type: Date,
      default: Date.now
    },
    coach: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
)

userSchema.plugin(PLM, {
  // usernameField: 'email',
  usernameField: 'email',
  hashField: 'password'
});

module.exports = model('User', userSchema);
// Model está siendo deconstruido desde mongoose
// module.exports = mongoose.model('User', userSchema);