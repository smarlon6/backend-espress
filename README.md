# Documentação API - Cadastro de Pets e Tutores

## Tecnologias utilizadas

- Node.js
- Express
- JSON
- UUID
- JSONSchema
- Postman

---

# Base URL

```bash
http://127.0.0.1:3333
```

---

# Rotas de Tutores

| Método | Rota | Descrição |
|---|---|---|
| GET | /tutores | Listar todos os tutores |
| GET | /tutores/:id | Buscar tutor por ID |
| POST | /tutores | Cadastrar tutor |
| PUT | /tutores/:id | Atualizar tutor completo |
| PATCH | /tutores/:id | Atualizar parcialmente tutor |
| DELETE | /tutores/:id | Excluir tutor |

---

# Exemplo JSON - Cadastro Tutor

```json
{
  "nome": "Marlon Tunes",
  "cpf": "12345678900",
  "telefone": "65999999999",
  "email": "marlon@email.com"
}
```

---

# Rotas de Pets

| Método | Rota | Descrição |
|---|---|---|
| GET | /pets | Listar todos os pets |
| GET | /pets/:id | Buscar pet por ID |
| POST | /pets | Cadastrar pet |
| PUT | /pets/:id | Atualizar pet completo |
| PATCH | /pets/:id | Atualizar parcialmente pet |
| DELETE | /pets/:id | Excluir pet |

---

# Exemplo JSON - Cadastro Pet

```json
{
  "nome": "Rex",
  "especie": "Cachorro",
  "raca": "Vira-lata",
  "idade": 3
}
```

---

# Funcionalidades Implementadas

- REST API com Express
- Manipulação de JSON
- Persistência em arquivos JSON
- Uso de Promises com async/await
- Validação com JSONSchema
- Uso de UUID
- Middlewares do Express
- Estrutura com Router
- Testes utilizando Postman
- Operações GET, POST, PUT, PATCH e DELETE

---

# Como Executar o Projeto

## Instalar dependências

```bash
npm install
```

## Executar projeto

```bash
npm run dev
```

---

# Testes

Os testes da API foram realizados utilizando o Postman.

---

# Autor

Marlon Tunes
