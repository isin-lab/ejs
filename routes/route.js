const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file.js')

const {
	getMain,
	allBook,
	createPage,
  create,
	getOne,
  updatePage,
	update,
	deleteBook,
	// downloadCover,
} = require('../controllers/controllers.js')

// получение главной страницы
router.get('/', getMain)

// получение всех книг
router.get('/all', allBook)

// получение одной книги по id
router.get('/book/:id', getOne)

// создание книги
router.get('/create', createPage)
router.post('/create', fileMulter.single('fileCover'), create)

// редактирование книги
router.get('/update/:id', updatePage)
router.post('/update/:id', fileMulter.single('fileCover'), update)

// удаление книги по id
router.delete('/delete/:id', deleteBook)

// скачивание картинки выбранной книги
// router.get('/download/:id/cover', downloadCover)

module.exports = router
