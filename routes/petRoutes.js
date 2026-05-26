const express = require('express')
const router = express.Router()

const petController = require('../controllers/petController')

router.get('/', petController.getPets)
router.get('/:id', petController.getPetById)
router.post('/', petController.addPet)
router.put('/:id', petController.updatePet)
router.patch('/:id', petController.patchPet)
router.delete('/:id', petController.removePet)

module.exports = router