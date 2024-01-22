// const { Op } = require('sequelize')
const { UniqueConstraintError, ValidationError, QueryTypes } = require('sequelize')
const { Dessert, User, Review, sequelize } = require('../db/sequelizeSetup')

const findAllDessert = (req, res) => {
    // paramètre optionnel qui permet d'ajouter les données relatives aux commentaires d'un Dessert
    Dessert.findAll({ include: Review })
        .then((results) => {
            res.json(results)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
}

const findAllRawSQLDessert = (req, res) => {
    sequelize.query("SELECT name, rating FROM  LEFTDessert JOIN reviews ON .idDessert = reviews.DessertId", { type: QueryTypes.SELECT })
        .then((results) => {
            res.json(results)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
}

const findDessertByPk = (req, res) => {
    Dessert.findByPk((parseInt(req.params.id)))
        .then((result) => {
            if (result) {
                res.json({ message: 'Un Dessert a été trouvé.', data: result })
            } else {
                res.status(404).json({ message: `Aucun Dessert n'a été trouvé.` })
            }
        })
        .catch((error) => {
            res.status(500).json({ message: 'Une erreur est survenue.', data: error.message })
        })
}

const createDessert = (req, res) => {
    User.findOne({ where: { username: req.username } })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: `L'utilisateur n'a pas été trouvé.` })
            }
            const newDessert = { ...req.body, UserId: user.id }

            Dessert.create(newDessert)
                .then((Dessert) => {
                    res.status(201).json({ message: 'Le Dessert a bien été créé', data: Dessert })
                })
                .catch((error) => {
                    if (error instanceof UniqueConstraintError || error instanceof ValidationError) {
                        return res.status(400).json({ message: error.message })
                    }
                    res.status(500).json({ message: `Le dessert n'a pas pu être créé`, data: error.message })
                })
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
}

const createDessertWithImg = (req, res) => {
    User.findOne({ where: { username: req.username } })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: `L'utilisateur n'a pas été trouvé.` })
            }
            console.log(req.file)
            const newDessert = { ...req.body, UserId: user.id, imageUrl: `${req.protocol}://${req.get('host')}/uploadedFiles/${req.file.filename}` }

            Dessert.create(newDessert)
                .then((Dessert) => {
                    res.status(201).json({ message: 'Le dessert a bien été créé', data: Dessert })
                })
                .catch((error) => {
                    if (error instanceof UniqueConstraintError || error instanceof ValidationError) {
                        return res.status(400).json({ message: error.message })
                    }
                    res.status(500).json({ message: `Le dessert n'a pas pu être créé`, data: error.message })
                })
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
}

const updateDessert = (req, res) => {
    Dessert.findByPk(req.params.id)
        .then((result) => {
            if (result) {
                return result.update(req.body)
                    .then(() => {
                        res.status(201).json({ message: 'Le dessert a bien été mis à jour.', data: result })
                    })
            } else {
                res.status(404).json({ message: `Aucun dessert à mettre à jour n'a été trouvé.` })
            }
        })
        .catch(error => {
            if (error instanceof UniqueConstraintError || error instanceof ValidationError) {
                return res.status(400).json({ message: error.message })
            }
            res.status(500).json({ message: 'Une erreur est survenue.', data: error.message })
        })
}

const updateDessertWithImg = (req, res) => {
    Dessert.findByPk(req.params.id)
        .then((result) => {
            if (result) {
                return result.update({ ...req.body, imageUrl: `${req.protocol}://${req.get('host')}/uploadedFiles/${req.file.filename}` })
                    .then(() => {
                        res.status(201).json({ message: 'Le dessert a bien été mis à jour.', data: result })
                    })
            } else {
                res.status(404).json({ message: `Aucun dessert à mettre à jour n'a été trouvé.` })
            }
        })
        .catch(error => {
            if (error instanceof UniqueConstraintError || error instanceof ValidationError) {
                return res.status(400).json({ message: error.message })
            }
            res.status(500).json({ message: 'Une erreur est survenue.', data: error.message })
        })
}

const deleteDessert = (req, res) => {
    // A. On vérifie que l'id passé en req.params.id renvoie bien une ligne de notre table.
    Dessert.findByPk(req.params.id)
        .then((result) => {
            // B. Si un Dessert correspond à l'id alors on exécute la méthode destroy()
            if (result) {
                return result.destroy()
                    // C. Si le Dessert est bien supprimé, on affiche un message avec comme data le Dessert récupéré dans le .findByPk()
                    .then((result) => {
                        res.json({ mesage: `Le dessert a bien été supprimé.`, data: result })
                    })
            } else {
                // B Si aucun Dessert ne correspond à l'id alors on retourne une réponse à POSTMAN
                res.status(404).json({ mesage: `Aucun dessert trouvé.` })
            }
        })
        .catch((error) => {
            // E. Si une erreur est survenue dès le findByPk, on retourne une réponse à POSTMAN
            res.status(500).json({ mesage: `La requête n'a pas aboutie.`, data: error.message })
        })
}

module.exports = { findAllDessert, findDessertByPk, createDessert, updateDessert, deleteDessert, findAllRawSQLDessert, createDessertWithImg, updateDessertWithImg }