const express = require('express')
const router = express.Router()
const { findAllDessert, findDessertByPk, createDessert, updateDessert, deleteDessert } = require('../controllers/dessertControllers')
const {protect, restrict,} = require('../controllers/authControllers');

router
    .route('/')
    .get(findAllDessert)
    .post(protect, restrict, createDessert)


router
    .route('/:id')
    .get(findDessertByPk)
    .put(protect, restrict, updateDessert)
    .delete(protect, restrict, deleteDessert)

module.exports = router