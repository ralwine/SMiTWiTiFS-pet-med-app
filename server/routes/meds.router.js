const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('/pet GET route');
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        let queryText = `SELECT * FROM "medications" WHERE pet_id=$1`;
        pool.query(queryText, [req.user.id])
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get user pets', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }

})

router.post('/', rejectUnauthenticated, (req, res) =>{

    console.log('/med POST route');
    console.log('req.body', req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user.id);

    const sqlText = `
        INSERT INTO "medications" (pet_id, med_name, instructions)
        
        VALUES ($1, $2, $3)`;
    const sqlValues = [
        req.body.petID,
        req.body.medName,
        req.body.instructions
    ]
    pool.query(sqlText, sqlValues)
        .then(result =>{
            res.sendStatus(201)
        }).catch(error =>{
            res.sendStatus(500)
            console.log("problem here in medsrouter", error)
        })

})

module.exports = router