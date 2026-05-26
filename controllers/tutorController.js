const path = require('path')
const { v4: uuidv4 } = require('uuid')

const { readJsonFile, writeJsonFile } = require('../utils/fileStorage')
const { validateTutor } = require('../models/tutorModel')

const tutoresPath = path.join(__dirname, '../data/tutores.json')

const getTutores = async (req, res) => {
  try {
    const tutores = await readJsonFile(tutoresPath)
    res.status(200).json(tutores)
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar tutores' })
  }
}

const getTutorById = async (req, res) => {
  try {
    const tutores = await readJsonFile(tutoresPath)
    const tutor = tutores.find(t => t.id === req.params.id)

    if (!tutor) {
      return res.status(404).json({ message: 'Tutor não encontrado' })
    }

    res.status(200).json(tutor)
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar tutor' })
  }
}

const addTutor = async (req, res) => {
  try {
    const tutor = req.body

    const validacao = validateTutor(tutor)

    if (!validacao.valid) {
      return res.status(400).json({
        message: 'Dados inválidos',
        errors: validacao.errors
      })
    }

    const tutores = await readJsonFile(tutoresPath)

    if (tutores.some(t => t.cpf === tutor.cpf)) {
      return res.status(400).json({ message: 'CPF já cadastrado' })
    }

    if (tutores.some(t => t.email === tutor.email)) {
      return res.status(400).json({ message: 'E-mail já cadastrado' })
    }

    tutor.id = uuidv4()

    tutores.push(tutor)

    await writeJsonFile(tutoresPath, tutores)

    res.status(201).json(tutor)
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar tutor' })
  }
}

const updateTutor = async (req, res) => {
  try {
    const tutores = await readJsonFile(tutoresPath)
    const index = tutores.findIndex(t => t.id === req.params.id)

    if (index === -1) {
      return res.status(404).json({ message: 'Tutor não encontrado' })
    }

    tutores[index] = {
      ...tutores[index],
      ...req.body
    }

    await writeJsonFile(tutoresPath, tutores)

    res.status(200).json(tutores[index])
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar tutor' })
  }
}

const patchTutor = async (req, res) => {
  try {
    const tutores = await readJsonFile(tutoresPath)
    const index = tutores.findIndex(t => t.id === req.params.id)

    if (index === -1) {
      return res.status(404).json({ message: 'Tutor não encontrado' })
    }

    tutores[index] = {
      ...tutores[index],
      ...req.body
    }

    await writeJsonFile(tutoresPath, tutores)

    res.status(200).json(tutores[index])
  } catch (err) {
    res.status(500).json({ message: 'Erro ao alterar tutor' })
  }
}

const removeTutor = async (req, res) => {
  try {
    const tutores = await readJsonFile(tutoresPath)
    const index = tutores.findIndex(t => t.id === req.params.id)

    if (index === -1) {
      return res.status(404).json({ message: 'Tutor não encontrado' })
    }

    tutores.splice(index, 1)

    await writeJsonFile(tutoresPath, tutores)

    res.status(200).json({ message: 'Tutor deletado com sucesso' })
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar tutor' })
  }
}

module.exports = {
  getTutores,
  getTutorById,
  addTutor,
  updateTutor,
  patchTutor,
  removeTutor
}