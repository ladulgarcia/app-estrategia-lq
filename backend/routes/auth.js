const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  //OJO: REVISAR EL TIPO DE SERVICIO DEL EMAIL
  host: "smtpout.secureserver.net",
  secureConnection: true,
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

//HOMEPAGE
router.get('/', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }))
})

router.post('/signup', (req, res, next) => {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let token = ''
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)]
  }
  const confirmationCode = token

  const user = { ...req.body, confirmationCode }
  User.register(user, req.body.password)
    .then((user) => {
      transporter.sendMail({
        from: 'Sesión de coaching con Dulce García <info@dulgarcia.com>',
        to: user.email,
        subject: 'Confirma tu Cuenta para comenzar tu sesión de coaching',

        text: `Hola ${user.name} 
          Por favor da click en el enlace aquí abajo para confirmar tu cuenta ${user.role} de : 
          ${req.headers.origin}/auth/confirm/${user.confirmationCode}
          Bienvenido a tu sesión de coaching de Estrategia LQ® &copy.`   
      })
      res.status(201).json({ user })
    })
    .catch((err) => res.status(500).json({ err }));
});

router.get('/confirm/:confirmCode', (req, res, next) => {
  User.findOne({ confirmationCode: req.params.confirmCode }).then(user => {
    let id = user._id
    User.findByIdAndUpdate(id, { status: 'Activo' }, () => {
      res.status(200).json({ user })
    })
  })
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/:id/edit', isAuth, (req, res, next) => {
  const { id } = req.params
  User.findOne({ id })
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/:id/edit', isAuth, (req, res, next) => {
  const { id } = req.params
  User.findOneAndUpdate({ id }, { $set: user })
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;