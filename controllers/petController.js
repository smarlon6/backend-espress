const path = require('path')
const { v4: uuidv4 } = require('uuid')

const { readJsonFile, writeJsonFile } = require('../utils/fileStorage')
const { validatePet } = require('../models/petModel')

const petsPath = path.join(__dirname, '../data/pets.json')
const tutoresPath = path.join(__dirname, '../data/tutores.json')

const getPets = async (req, res) => {
  try {
    const pets = await readJsonFile(petsPath)
    res.status(200).json(pets)
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar pets' })
  }
}

const getPetById = async (req, res) => {
  try {
    const pets = await readJsonFile(petsPath)
    const pet = pets.find(p => p.id === req.params.id)

    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' })
    }

    res.status(200).json(pet)
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar pet' })
  }
}

const addPet = async (req, res) => {
  try {
    const pet = req.body

    const validacao = validatePet(pet)

    if (!validacao.valid) {
      return res.status(400).json({
        message: 'Dados inválidos',
        errors: validacao.errors
      })
    }

    const pets = await readJsonFile(petsPath)

    if (pet.tutorId) {
      const tutores = await readJsonFile(tutoresPath)
      const tutorExiste = tutores.some(t => t.id === pet.tutorId)

      if (!tutorExiste) {
        return res.status(404).json({ message: 'Tutor informado não existe' })
      }
    }

    pet.id = uuidv4()

    pets.push(pet)

    await writeJsonFile(petsPath, pets)

    res.status(201).json(pet)
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar pet' })
  }
}

const updatePet = async (req, res) => {
  try {
    const pets = await readJsonFile(petsPath)
    const index = pets.findIndex(p => p.id === req.params.id)

    if (index === -1) {
      return res.status(404).json({ message: 'Pet não encontrado' })
    }

    pets[index] = {
      ...pets[index],
      ...req.body
    }

    await writeJsonFile(petsPath, pets)

    res.status(200).json(pets[index])
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar pet' })
  }
}

const patchPet = async (req, res) => {
  try {
    const pets = await readJsonFile(petsPath)
    const index = pets.findIndex(p => p.id === req.params.id)

    if (index === -1) {
      return res.status(404).json({ message: 'Pet não encontrado' })
    }

    pets[index] = {
      ...pets[index],
      ...req.body
    }

    await writeJsonFile(petsPath, pets)

    res.status(200).json(pets[index])
  } catch (err) {
    res.status(500).json({ message: 'Erro ao alterar pet' })
  }
}

const removePet = async (req, res) => {
  try {
    const pets = await readJsonFile(petsPath)
    const index = pets.findIndex(p => p.id === req.params.id)

    if (index === -1) {
      return res.status(404).json({ message: 'Pet não encontrado' })
    }

    pets.splice(index, 1)

    await writeJsonFile(petsPath, pets)

    res.status(200).json({ message: 'Pet deletado com sucesso' })
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar pet' })
  }
}

module.exports = {
  getPets,
  getPetById,
  addPet,
  updatePet,
  patchPet,
  removePet
}