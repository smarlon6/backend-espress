const { Validator } = require('jsonschema')

const validator = new Validator()

const petSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    nome: { type: 'string' },
    especie: { type: 'string' },
    raca: { type: 'string' },
    idade: { type: 'number', minimum: 0 },
    tutorId: { type: 'string' }
  },
  required: ['nome', 'especie', 'raca', 'idade']
}

const validatePet = (pet) => {
  return validator.validate(pet, petSchema)
}

module.exports = {
  validatePet
}