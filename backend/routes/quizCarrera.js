const express = require('express');
const router = express.Router();
const Carrera = require('../models/Carrera');
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
  Carrera.create({ owner, fase1 })
    .then(carrera => res.status(200).json({ carrera }))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/fase3/:id', isAuth, (req, res, next) => {
  const { id } = req.params
  User.findById({ _id: id })
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/fase3/:id', isAuth, (req, res, next) => {
  const { id } = req.params
  const fase1 = req.body
  const owner = id
  Carrera.create({ owner, fase1 })
    .then(vida => res.status(200).json({ vida }))
    .catch((err) => res.status(500).json({ err }));
});




router.get('/fase2/:id', isAuth, (req, res, next) => {
  function rand() {
    const randomArr = [
      "1Aléjate dos pasos… Crea una metáfora de tu proyecto.Cuéntame el final de la historia.",
      "2En este momento: ¿te conviene ir al ataque o esperar?",
      "3¿Qué cosas diferentes podrías intentar?",
      "4¿A quién es conveniente que comuniques o involucres en este proyecto? ¿Cómo se los comunicarías?",
      "5¿Cómo puedes convertir tus obstáculos en recursos?",
      "6¿Qué recursos necesitas? ¿Cómo los puedes conseguir?",
      "7¿Qué ya intentaste? ¿Qué no has intentado?",
      "8¿De qué forma puedes aprovechar los recursos que ya tienes?",
      "9Imagina caminos alternativos que te permitan llegar a tu objetivo. ¿Cuáles son?",
      "10Qué tendrías que hacer para llegar a tu objetivo con estos métodos: 1-Sacrificándote y luchando 2-Fácil y sin mucho esfuerzo 3-Rompiendo tus propias reglas.",
      "11¿Qué riesgos quieres tomar? Evalúa costo-beneficio",
      "12¿Cuál es el obstáculo clave en este momento? ¿Cómo lo abordarías? Menciona tres forma en que puedes actuar al respecto.",
      "13Da dos pasos hacia el futuro… Cierra los ojos e imagina que ya lograste tus objetivos… Platícame cómo lo hiciste.",
      "14¿Cómo puedes hacer jaque mate en esta estrategia? Imagina una jugada maestra, qué sería totalmente improbable que sucediera.",
      "15¿Qué información adicional necesitas conocer para potenciar tu estrategia?",
      "16¿Quién ya ha tenido éxito en un proyecto similar? ¿Cuáles fueron sus claves para lograrlo? Nota: Si no sabes, investígalo. Cuando nos referimos a proyecto similar puede ser en otra industria u otro contexto."
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

  let carrera = {
    //questions,
    questionsr
  }



  const { id } = req.params
  console.log(id)
  User.findOneAndUpdate({ _id: id }, { carrera: carrera })
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