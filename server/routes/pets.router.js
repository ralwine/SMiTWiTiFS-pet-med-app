const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
    const query = `SELECT * FROM pets ORDER BY "user_id"`;
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get user pets', err);
            res.sendStatus(500)
        })
})

router.post('/', (req, res) => {
    
    const petDBInfo = req.body;
    console.log("petDBInfo",petDBInfo);
    const sqlText = `
        INSERT INTO "pets" ("pet_name", "user_id", "pet_info", "pet_url")
        VALUES ($1,$2,$3,$4)`;
    pool.query(sqlText,[
        petDBInfo.pet_name,
        petDBInfo.user_id,
        petDBInfo.pet_info,
        petDBInfo.pet_url
    ]).then(result=>{
        res.sendStatus(201)
    }).catch(error=>{
        res.sendStatus(500)
    })

})

module.exports = router;