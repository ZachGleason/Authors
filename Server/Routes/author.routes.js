const AuthorController = require('../Controllers/author.controller');

module.exports = app => {
app.get('/authors', AuthorController.findAllAuthors);
app.get('/edit/:id', AuthorController.findOneSingleAuthor);
app.put('/author/:id', AuthorController.updateExistingAuthor);
app.post('/authors', AuthorController.createNewAuthor);
app.delete('/author/:id', AuthorController.deleteAnExistingAuthor);
}