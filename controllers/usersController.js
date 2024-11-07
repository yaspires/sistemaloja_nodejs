import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user.js";
const router = express.Router();


router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut:true
  });
});

// rota de logout
router.get("/logout", (req,res) => {
  req.session.user = undefined
  res.redirect("/")
})

router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut:true
  });
});

router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // verificar se o usuario ja esta cadastrado
  User.findOne({ where: { email: email } }).then((user) => {
    //se não houver
    if (user == undefined) {
      // aqui é feito o cadastro e o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      User.create({
        email: email,
        password: hash,
      }).then(() => {
        res.redirect("login");
      });
      // caso usuario ja esteja cadastrado
    } else {
      req.flash('danger', "Usuario já cadastrado!")
      res.redirect("cadastro")
      
    }
  });
});

// Rota de autenticação
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //busca usuário no banco
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    // se o usuario estiver cadastrado
    if (user != undefined) {
      // valida a senha (verifica o hash)
      const correct = bcrypt.compareSync(password, user.password);
      // se a senha for valida
      if (correct) {
        //autoriza login
        req.session.user = {
          id: user.id,
          email: user.email,
        };
        // res.send(`Usuário logado: <br> ID:${req.session.user['id']}<br>
        //   E-mail: ${req.session.user['email']}`)
        req.flash('success', "login efetuado com sucesso!")
        res.redirect("/");

        //senha nao valida
      } else {
        req.flash('danger', "Senha invalida!")
        res.send(`senha inválida! <br> 
                <a href="/login">Tente novamente!</a>`);
      }
    } else {
      // se o usuario não existir
      res.send(`Usuário não cadastrado. <br> 
        <a href="/login">Tente novamente!</a>`);
    }
  });
});

export default router;
