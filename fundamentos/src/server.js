// CommonJS => require
// const http = require('http')

// ESModules => import/export
// Para habilitar o padrão de modules devemos colocar a config abaixo no package
// "type": "module",

import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' &&  url === '/users') {
    return res.setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' &&  url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'jonh@exemple.com',
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end('NOT FOUND')
})

server.listen(3333)
