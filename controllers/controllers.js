const { v4: uuid } = require('uuid')


const books = {
	myBooks: [
		{
			authors: 'Дронов Владимир Александрович, Прохоренок Николай Анатольевич',
			title: 'JavaScript и Node.js для веб-разработчиков ',
			description:
				'Книга рассказывает о языке программирования JavaScript, разработке на нем как программ общего назначения, выполняющихся в среде Node.js, так и скриптов для веб-страниц. Даны основы JavaScript: типы данных, операторы, работа с числами, строками, датой и временем, массивами, функции, классы (как старого, так и нового синтаксиса), итераторы, генераторы и класс Promise. Объяснена работа с отладчиком, встроенным в редактор Visual Studio Code. Рассказано о модулях, средствах для работы с файловой системой и программирования веб-серверов. Описана объектная модель документа. Рассмотрены средства для работы с элементами веб-страницы, самой страницей и браузером и технология AJAX (в том числе Fetch API), а также готовые программные пакеты для разработки веб-сайтов, в частности Webpack.',
			fileCover: '../uploads/img/3.webp',
			id: '1',
			fileBook: '',
		},
		{
			authors: 'Дакетт Джон',
			title: 'Javascript и jQuery. Интерактивная веб-разработка',
			description:
				'Приглашаем вас в приятное путешествие  изучение языка JavaScript и библиотеки jQuery. Вы впервые встретились с языком JavaScript или уже добавили какие-либо сценарии на свои веб-страницы и желаете лучше понять, как они устроены? Тогда эта книга для вас. Все, что вам потребуется  это знание стандартов HTML и CSS. Эта книга научит вас тому, как сделать сайты более интерактивными, привлекательными и удобными для пользователя. Простой визуальный способ подачи информации с понятными примерами и небольшим фрагментом кода знакомит с новой темой на каждой странице. Цель достигается при помощи объединения теории программирования с примерами, которые демонстрируют применение сценариев JavaScript и библиотеки jQuery на известных сайтах. Практически сразу вы сможете мыслить и создавать код как программист.',
			fileCover: '../uploads/img/2.webp',
			id: '2',
			fileBook: '',
		},
		{
			authors: 'Альтхофф Кори',
			title:
				'Сам себе программист. Как научиться программировать и устроиться в Ebay?',
			description:
				'Автор книги всего за год научился программировать, что само по себе немало. Однако Кори Альтхофф пошел дальше, и научившись программировать, он устроился разработчиком в одну из самых серьезных современных IT компаний - Ebay. Как ему удалось? Читайте эту книгу, изучайте программирование на языке Python по уникальной авторской методике - вам это тоже по силам!',
			fileCover: '../uploads/img/1.webp',
			id: '3',
			fileBook: '',
		},
	],
}

class Book {
	constructor(
		authors = '',
		title = '',
		description = '',
		id = uuid(),
	) {
		this.authors = authors
		this.title = title
		this.description = description
		this.id = id
	}
}

const getMain = (req, res) => {
	res.render('index', { title: 'main', active: 'main' })
}
//работает
const allBook = (req, res) => {
	const { myBooks } = books
	res.render('books', {title: myBooks.title, active: "main", myBooks })
}
//работает
const getOne = (req, res) => {
	const { myBooks } = books
	const { id } = req.params
	const idx = myBooks.findIndex(el => el.id === id)
	if (idx === -1) {
		res.status(404).send('Книга не найдена')
		console.log("hui")
	} else {
		console.log(myBooks[idx])
		res.render('book', { title: 'books', active: 'books', data: myBooks[idx] })
	}
}
//работает
const createPage = (req, res) => {
	res.render('create', { title: 'create', active: 'create', data: {} })
}

const create = (req, res) => {
	const { myBooks } = books
	const authors = req.body.authors
	const title = req.body.title
	const description = req.body.description
	const newBook = new Book(authors, title, description)
	myBooks.push(newBook)
	console.log(newBook)
	res.redirect('/all')
}
//работает
const updatePage = (req, res) => {
	const { myBooks } = books
	const { id } = req.params
	const idx = myBooks.findIndex(el => el.id === id)

	if (idx === -1) {
		res.status(404).send('Книга не найдена')	
	} else {
		res.render('update', {
			title: 'books',
			active: 'books',
			data: myBooks[idx],
		})
	}
}
//работает частично
const update = (req, res) => {
	const { myBooks } = books
	const { id } = req.params
	const { authors, title, description } = req.body
	const idx = myBooks.findIndex(el => el.id === id)

	if (idx === -1) {
		res.status(404).send('Книга не найдена')
	} 
	myBooks[idx] = {
		...myBooks[idx],
		authors,
		title,
		description
	}
	res.redirect(`/book/${id}`)
}

const deleteBook = (req, res) => {
	const { myBooks } = books
	const { id } = req.params
	const idx = myBooks.findIndex(el => el.id === id)

	if (idx === -1) {
		res.status(404).send('Книга не найдена')
		
	} else {
		myBooks.splice(idx, 1)
		res.redirect('/books')
		res.end()
	}
}


module.exports = {
	getMain,
	allBook,
	createPage,
	create,
	getOne,
	updatePage,
	update,
	deleteBook,
}
