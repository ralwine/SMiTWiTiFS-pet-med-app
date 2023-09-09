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
        let queryText = `SELECT * FROM "pets" WHERE user_id=$1`;
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

router.post('/', rejectUnauthenticated, (req, res) => {

    console.log('/pet POST route');
    console.log('req.body', req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user.id);

    const sqlText = `
        INSERT INTO "pets" (pet_name, user_id, pet_info, pet_url)
        
        VALUES ($1,$2,$3,$4)`;
    const sqlValues = [
        req.body.petName,
        req.user.id,
        req.body.petBio,
        req.body.petURL
    ]
    pool.query(sqlText, sqlValues)
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            res.sendStatus(500)
            console.log("problem here in router", error)
        })

})

// test this in POSTMAN
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    
    const petID = req.params.id;
    console.log("petsrouter DELETE", petID)
    const sqlText = `DELETE FROM "pets" WHERE "id"=$1`;

    pool.query(sqlText, [petID])
        .then(result => {
            res.sendStatus(204)
        }).catch((error) => {
            console.log("problem w/DELETE in petsRouter", error)
            res.sendStatus(500)
        })
});

module.exports = router;