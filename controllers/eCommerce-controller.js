    
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


    // router.get('/transaction', function(req,res) {
    //     db.Transaction.findAll({ include: [{ all: true }]})
    //             .then(function(data){
    //             var transObject = {
    //                 transactions: data
    //             };
    //         return res.render('transaction', transObject);
    //         }).catch(function(err) {
    //         res.json(err)
    //     });
    // });

    // Retreive goat data
    router.get('/goatCat/:id', function(req,res,next){
        res.render('goatCat',{output: req.params.id});
    });

    router.post('goatCat/submit', function(req,res,next){
        var id = req.params.id;
        res.redirect('/goatCat' + id)
    });



    // router.get('/transactions', function(req,res) {
    //     db.Goat.findAll({})
    //             .then(function(data){
    //             var goatObject = {
    //                 goats: data
    //             };
    //         return res.render('goats', goatObject);
    //         }).catch(function(err) {
    //         res.json(err)
    //     });
    // });

    // router.get('/transactions', function(req,res) {
    //     db.Member.findAll({})
    //             .then(function(data){
    //             var memberObject = {
    //                 members: data
    //             };
    //         return res.render('members', memberObject);
    //         }).catch(function(err) {
    //         res.json(err)
    //     });
    // });

    router.post("/transactions", function(req, res) {
        db.Transaction.create({

            member_name: req.body.MemberId,
            credit_card: req.body.UserId,
 
            }).then(function(data) {
                
                res.redirect("/transaction");
            })
    });




// --------------------------------------------------
// Landing Page
// --------------------------------------------------

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
// Transaction Page
// --------------------------------------------------


// models.Survey.create(survey, {
//     include: [{
//         model: models.Question, 
//         include: [models.Option]
//     }]
// }).then(function() {
//     reply({success:1});
// });


// --------------------------------------------------
// Login Page
// --------------------------------------------------


    // router.get('/signup', function(req,res) {
    //     db.User.findAll({})
    //             .then(function(data){
    //             var userObject = {
    //                 users: data
    //             };
    //         return res.render('users', userObject);
    //         }).catch(function(err) {
    //         res.json(err)
    //     });
    // });


    return router;

};



