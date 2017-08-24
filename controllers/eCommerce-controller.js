	
var express = require("express");

var router = express.Router();

var db = require("../models");

module.exports = function(app) {

	router.get('/', function(req,res) {
        db.xxxxx.findAll({include:{model: db.xxxxx}})
                .then(function(data){
                var goatObject = {
                    xxxxx: data
                };
            return res.render('index', goatObject);
            }).catch(function(err) {
            res.json(err)
        });
    });

    router.post("/", function(req, res) {
        db.xxxx.create({

            goat_name: req.body.xxxxInput,
            xxxx: req.body.userInput

            }).then(function(data) {
                
                res.redirect("/");
            })
    });

    router.put("/:id", function(req, res) {
        db.xxxx.update({
                xxx: req.body.something
            }, {
                where: {
                    id: req.params.id
                }
            }).then(function(data) {
                
                res.redirect("/");
            }).catch(function(err) {
                res.json(err)
            });
    });




	return router;

};
