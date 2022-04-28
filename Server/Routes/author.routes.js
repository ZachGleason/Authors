const AuthorController = require('../Controllers/author.controller');

module.exports = app => {
app.get('/authors', AuthorController.findAllAuthors);
app.get('/author/:id', AuthorController.findOneSingleAuthor);
app.put('/author/:id', AuthorController.updateExistingAuthor);
app.post('/author/:id', AuthorController.createNewAuthor);
app.delete('/author/:id', AuthorController.deleteAnExistingAuthor);
}