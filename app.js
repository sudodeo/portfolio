const http = require('http')
const fs = require('fs')
const PORT = 4000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('./public/home.html', 'utf-8', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    } else if (req.url === '/home') {
        res.writeHead(301, { 'Location': '/' })
        res.end()
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('./public/about.html', 'utf-8', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('./public/contact.html', 'utf-8', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    }
})

server.listen(PORT, 'localhost', () => { console.log(`Server is running on port ${PORT}`) })