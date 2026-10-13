import { createServer } from 'node:http'

const server = createServer((req, res) => {
    let response: string | null = null;
    let status: number | null = null

    const routeWild = "/wild"

    if(req.url === routeWild){
        response = "ok"
        status = 200
    } else {
        response = "Cette route n\'existe pas"
        status = 404
    }
    res.writeHead(status, { 'Content-Type': 'text/plain' })
    res.end(response+'\n')
})

server.listen(3000, '127.0.0.1', () => {
    console.log('poke-trainer est lancé')
    console.log("Server started on port 3000")
})