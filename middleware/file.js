const multer = require('multer')

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'img')
	},
	destination(req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`)
	},
})

module.exports = multer({storage})