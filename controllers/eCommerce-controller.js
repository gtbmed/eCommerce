    
var express = require("express");

var router = express.Router();

var db = require("../models");

module.exports = function(app) {


// --------------------------------------------------
// Goats Page
// --------------------------------------------------

    router.get('/goats', function(req,res) {
        db.Goat.findAll({})
                .then(function(data){
                var goatObject = {
                    goats: data
                };
            return res.render('goats', goatObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


    router.post("/goats", function(req, res) {
        db.Goat.create({

            goat_name: req.body.goat_name,
            goat_color: req.body.goat_color,
            goat_sex: req.body.goat_sex,
            goat_price: req.body.goat_price,
            picture_url: req.body.picture_url,
            goat_sold:false    

            }).then(function(data) {
                
                res.redirect("/goats");
            })
    });


// --------------------------------------------------
// Members Page
// --------------------------------------------------

    router.get('/members', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('members', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


    router.post("/members", function(req, res) {
        db.Member.create({

            member_name: req.body.member_name,
            credit_card: req.body.credit_card,
            address: req.body.address

            }).then(function(data) {
                
                res.redirect("/members");
            })
    });


// --------------------------------------------------
// Transaction Page
// --------------------------------------------------


    router.get('/transaction', function(req,res) {
        db.Transaction.findAll({ include: [{ all: true }]})
                .then(function(data){
                var transObject = {
                    transaction: data
                };
            return res.render('transaction', transObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


    router.post("/transaction", function(req, res) {
        db.Member.create({

            member_name: req.body.member_name,
            credit_card: req.body.credit_card,
            address: req.body.address

            }).then(function(data) {
                
                res.redirect("/transaction");
            })
    });



// --------------------------------------------------
// Landing Page
// --------------------------------------------------


    // router.get('/', function(req,res) {
    //     db.User.findAll({})
    //             .then(function(data){
    //             var userObject = {
    //                 user: data
    //             };
    //         return res.render('index', userObject);
    //         }).catch(function(err) {
    //         res.json(err)
    //     });
    // });


    // Goat of the Day
    router.get('/',function(req,res){
        db.Goat.findOne({ 
            where: {id: 5} })
        .then(function(data){
                var goatObject = {
                    goat: data
                };
            return res.render('index', goatObject);
            }).catch(function(err) {
            res.json(err)
        });
    })




    return router;

};



