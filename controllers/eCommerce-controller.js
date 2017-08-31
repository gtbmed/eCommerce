
var express = require("express");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

var router = express.Router();

var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

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
// Goats Catelog
// --------------------------------------------------

    router.get('/goatsCat', function(req,res) {
        db.Goat.findAll({})
                .then(function(data){
                var goatObject = {
                    goats: data
                };
            return res.render('goatsCat', goatObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


    router.post('/goatsCat/submit/:id', function(req,res,next){
        var id = req.params.id;
        console.log("id is : " + id);
        res.redirect('/goatsCat/' + id);
    });


// --------------------------------------------------
// Transaction Page
// --------------------------------------------------

    // Retreive goat data for transaction page
    router.get('/goatsCat/:id', function(req,res,next){
        db.Goat.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(function(data){
            var goatObject = {
                goats: data
            };
            return res.render('transactions', goatObject);
            }).catch(function(err) {
                res.json(err)
        });
    });

    router.post("/memAddTrans", function(req, res) {
        db.Member.create({

            member_name: req.body.member_name,
            credit_card: req.body.credit_card,
            address: req.body.address,
            UserId: 1

            }).then(function(data) {
               //res.redirect("/transactions");
               res.render('transactions',{output:data})
            })
    });

    router.post("/transDone", function(req, res) {
        db.Transaction.create({
            MemberId: req.body.MemberId,
            GoatId: 2
        }).then(function(data) {
                res.redirect("/cart");
        })
    });

    router.get('/cart', function(req,res,next){
        db.Transaction.findAll({
        })
        .then(function(data){
            var transObject = {
                transactions: data
            };
            return res.render('cart', transObject);
            }).catch(function(err) {
                res.json(err)
        });
    });


// --------------------------------------------------
// Members Page
// --------------------------------------------------

    router.get('/memDetails', function(req,res) {
        db.Member.findAll({})
                .then(function(data){
                var memberObject = {
                    members: data
                };
            return res.render('memDetails', memberObject);
            }).catch(function(err) {
            res.json(err)
        });
    });


    router.post("/memDetails", function(req, res) {
        db.Member.create({

            member_name: req.body.member_name,
            credit_card: req.body.credit_card,
            address: req.body.address

            }).then(function(data) {

                res.redirect("/memDetails");
            })
    });


// // --------------------------------------------------
// // Landing Page
// // --------------------------------------------------


    // Goat of the Day
    router.get('/',function(req,res){
        db.Goat.findOne({
            where: {id: 2} })
        .then(function(data){
                var goatOftheDay = {
                    goats: data
                };
            return res.render('index', goatOftheDay );
            }).catch(function(err) {
            res.json(err)
        });
    });


// --------------------------------------------------
// Login Page
// --------------------------------------------------

    // Retreive User data for loginMems page
    router.get('/loginMems', function(req,res,next){
        db.User.findAll({
        })
        .then(function(data){
            var userObject = {
                users: data
            };
            return res.render('loginMems', userObject);
            }).catch(function(err) {
                res.json(err)
        });
    });

    router.post('/loginMems/submit/:email', function(req,res,next){
        var email = req.params.email;
        console.log("id is : " + email);
        console.log("............................." + email);
        res.redirect('/loginMems/' + email);
    });





    ////////////////////

    // Login
    router.get('/returnMems/:email', function(req,res) {
        db.User.findOne({
             where: {
                email: req.params.email
            }
        }).then(function(data){
                var userLogsObject = {
                    // if(email != null){

                    // }
                };
            //return res.render('loginMems', userLogsObject);
            res.redirect('/goatsCat');
            }).catch(function(err) {
            res.json(err)
        });
    });

    // signup
    router.post("/signUpMems", function(req, res) {
        db.User.create({
            email: req.body.nemail,
            password: req.body.npassword,
            }).then(function(data) {
                res.redirect("/goatsCat");
            });
    });



// --------------------------------------------------
// Admin Page
// --------------------------------------------------

 router.get('/admins', function(req,res) {
        db.Transaction.findAll({
            // include: [
            //       {
            //         model: db.Goat,
            //         required: false
            //       },
            //       {
            //         model: db.Member,
            //         required: false
            //       }
            //     ]//,
            //where: {createdAt: {$between: [2017-08-20, 2017-08-30]}}

        }).then(function(data){
                var transObject = {
                    transactions: data
                };
            return res.render('admins', transObject);
            }).catch(function(err) {
            res.json(err)
        });
    });



    return router;

};
