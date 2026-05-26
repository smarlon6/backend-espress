const { Validator } = require('jsonschema')

const validator = new Validator()

const tutorSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    nome: { type: 'string' },
    cpf: { type: 'string' },
    telefone: { type: 'string' },
    email: { type: 'string' }
  },
  required: ['nome', 'cpf', 'telefone', 'email']
}

const validateTutor = (tutor) => {
  return validator.validate(tutor, tutorSchema)
}

module.exports = {
  validateTutor
}