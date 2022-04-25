const  Author = require('../models/Author.model');

const findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json({ Authors: allAuthors })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.json({ Author: oneSingleAuthor })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json({ Author: newlyCreatedAuthor })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ Author: updatedAuthor })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports = {
    findAllAuthors,
    findOneSingleAuthor,
    createNewAuthor,
    updateExistingAuthor,
    deleteAnExistingAuthor,
}