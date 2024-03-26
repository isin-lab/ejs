const express = require('express')
const router = express.Router()

const {
	getMain,
	allBook,
	createPage,
  create,
	getOne,
  updatePage,
	update,
	deleteBook,
} = require('../controllers/controllers.js')

// получение главной страницы
router.get('/', getMain)

// получение всех книг
router.get('/all', allBook)

// получение одной книги по id
router.get('/book/:id', getOne)

// создание книги
router.get('/create', createPage)
router.post('/create', create)

// редактирование книги
router.get('/update/:id', updatePage)
router.post('/update/:id', update)

// удаление книги по id
router.delete('/delete/:id', deleteBook)


module.exports = router
