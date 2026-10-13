import { createServer } from 'node:http'

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hellow world')
})

server.listen(3000, '127.0.0.1', () => {
    console.log('poke-trainer est lancé')
    console.log("Server started on port 3000")
})