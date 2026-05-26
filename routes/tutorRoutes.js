const express = require('express')
const router = express.Router()

const tutorController = require('../controllers/tutorController')

router.get('/', tutorController.getTutores)
router.get('/:id', tutorController.getTutorById)
router.post('/', tutorController.addTutor)
router.put('/:id', tutorController.updateTutor)
router.patch('/:id', tutorController.patchTutor)
router.delete('/:id', tutorController.removeTutor)

module.exports = router