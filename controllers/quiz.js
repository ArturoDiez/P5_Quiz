
const sequelize = require("sequelize");
const models = require("../models");

exports.index = (req,res,next) => {
    sequelize.models.quiz.findAll()
        .then(function (quizzes) {
            res.render('quizzes', {quizzes})
        })
        .catch(function (error) { next(error)});
};
