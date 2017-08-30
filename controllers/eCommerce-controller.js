    
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
        //res.send(id);
        console.log("............................." + id);
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





//     router.post("/transactions", function(req, res) {
//         db.Transaction.create({

//             MemberId: req.body.MemberId,
//             GoatId: req.body.goatId
 
//             }).then(function(data) {                
//                 res.redirect("/transaction");
//             })
//     });


    router.post("/transactions", function(req, res) {
        db.Member.create({

            member_name: req.body.member_name,
            credit_card: req.body.credit_card,
            address: req.body.address

            }).then(function(data) {
                
                res.redirect("/transactions");
            })
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
            return res.render('members', memberObject);
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
                
                res.redirect("/members");
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
    })



// --------------------------------------------------
// Login Page
// --------------------------------------------------




    return router;

};



