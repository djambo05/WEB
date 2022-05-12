import express from "express"
import path from 'path'
import {requestTime, logger} from "./middlewares.js"

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()


app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log(app.get('views'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)

app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features page', active: 'features'})
})

// app.get('/download_I', (req, res) => {
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })

// app.get('/download_F', (req, res) => {
//     //res.send('<h1>HEllo</h1>')
//     res.download(path.resolve(__dirname, 'static', 'features.html'))
// })



app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})