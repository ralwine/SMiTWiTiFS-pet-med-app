const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log("in medsrouterGEt", req.params.id)
    
        console.log('/medications GET route');
        console.log('is authenticated?', req.isAuthenticated());
        //console.log('pet_id', req.body.pet_id);
        let queryText = `SELECT * FROM "medications" WHERE pet_id=$1`;
        
        console.log("in meds.routerGET: ", req.body)
        pool.query(queryText, [req.params.id])
            .then(result => {
                res.send(result.rows);
                console.log("result.rows", result.rows)
            })
            .catch(err => {
                console.log('ERROR: Get pet meds', err);
                res.sendStatus(500);
            });
    
})
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('/med POST route');
    console.log('req.body', req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user.id, req.body.petID);
    const sqlText = `
        INSERT INTO "medications" (pet_id, med_name, instructions)
        
        VALUES ($1, $2, $3)`;
    const sqlValues = [
        req.body.pet_id,
        req.body.med_name,
        req.body.instructions
    ]
    pool.query(sqlText, sqlValues)
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            res.sendStatus(500)
            console.log("problem here in medsrouter", error)
        })
})
// test this in POSTMAN
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const medID = req.params.id;
    console.log("petsrouter DELETE", medID)
    const sqlText = `DELETE FROM "medications" WHERE "id"=$1`;
    pool.query(sqlText, [medID])
        .then(result => {
            res.sendStatus(204)
        }).catch((error) => {
            console.log("problem w/DELETE in medsRouter", error)
            res.sendStatus(500)
        })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {

    console.log("hey", req.params, req.body)
    const medID = req.params.id;
    const newMedInfo = req.body.pet_info;
    console.log("in medsRouter PUT", medID, newMedInfo)
    
    const sqlText = `
        UPDATE "meds" SET "instructions" =$1
        WHERE "id" =$2 AND "med_id" = $3`;
    const sqlValues = [newMedInfo, medID];
    console.log("in petsRouter PUT", medID, newMedInfo, req.user.id)

    pool.query(sqlText, sqlValues)
        .then((result) =>{
            if(result.rowCount === 1) {
                res.sendStatus(200);
            }else{
                res.sendStatus(404);
            }
        }).catch((error)=>{
            console.error("problem w/PUT in medsRouter", error)
            res.sendStatus(500)
        })
});
module.exports = router