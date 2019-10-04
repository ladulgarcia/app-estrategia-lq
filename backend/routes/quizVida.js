const express = require('express');
const router = express.Router();
const Vida = require('../models/Vida');
const passport = require('../config/passport');
const User = require('../models/User')

router.get('/fase1/:id', isAuth, (req, res, next) => {
  const { id } = req.params
  User.findById({ _id: id })
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/fase1/:id', isAuth, (req, res, next) => {
  const { id } = req.params
  const fase1 = req.body
  const owner = id
  Vida.create({ owner, fase1 })
    .then(vida => res.status(200).json({ vida }))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/fase2/:id', isAuth, (req, res, next) => {
  // const questions = []
  function rand() {
    const randomArr = [
      "1¿A quién es importante que le pidas apoyo? ¿En qué y cómo?",
      "2¿A quién sería importante que le comunicaras tu proyecto de vida?",
      "3¿En qué te motiva prepararte? ¿Qué sería importante que estudiaras para revolucionar tu vida?",
      "4¿Qué puertas puedes cerrar para liberar tu energía?",
      "5¿En qué vale la pena que concentres tu atención en los próximos 3 meses?",
      "6¿Cómo puedes encontrar más tiempo para hacer lo que te apasiona?",
      "7¿Qué podrías cambiar de ti que revolucionaría tú entorno?",
      "8Crea una metáfora de tu proyecto de vida. En esa misma metáfora describe cuál sería tu estrategia.",
      "9Menciona 3 locuras con las que sorprenderías a todos.",
      "10Aléjate 3 metros y 10 años… ¿Qué es lo más importante de este proyecto?",
      "11Vete a tu lecho de muerte… ¿Qué fue lo que realmente valió la pena de la vida?",
      "12¿Cómo sería la versión cómica de tu proyecto de vida?",
      "13¿Qué decreto te ayudaría a revolucionar este proyecto?",
      "14¿Qué cosas podrías hacer para aumentar tus niveles de motivación? ¿Cómo impactaría en tu proyecto?",
      "15¿De qué forma puedes aprovechar más tu talento para lograr tus objetivos?",
      "16¿De qué forma puedes convertir a tu sombra en tu aliado para tu proyecto de vida?",
      "17¿De qué forma puedes complicar todo?",
      "18¿De qué forma puedes facilitarte las cosas?",
      "19¿Cómo puedes ajustar o cambiar tus objetivos para aprovechar mejor tus talentos?",
      "20¿De qué forma puedes aprovechar tu hobble para crecer más en tu proyecto de vida?"
    ]
    const questionsrDone = [];
    let inProcess = true;
    let indx = 0;
    while (inProcess) {
      let randomQuiz = Math.floor(Math.random() * randomArr.length);
      let isDone = false;
      for (let j = 0; j < questionsrDone.length; j++) {
        if (questionsrDone[j] === randomQuiz)
          isDone = true;
      }
      if (!isDone) {
        questionsrDone.push(randomArr[randomQuiz]);
        //console.log(randomArr[questionsrDone[indx]])
        let preguntas = randomArr[questionsrDone[indx]]
        indx++
      }
      if (questionsrDone.length == 5) inProcess = false;
    }
    return questionsrDone
  }
  let questionsr = rand()

  let vida = {
    // questions,
    questionsr
  }

  const { id } = req.params
  console.log(id)
  User.findOneAndUpdate({ _id: id }, { vida: vida })
    .then((user) => {
      console.log(user)
      res.status(200).json({ user })
    })
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;