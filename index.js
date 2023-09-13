const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const produtos = [
    {
        link: "camisa_corinthians",
        nome: "Camisa Corinthians",
        valor: "R$299,00",
        imagemUrl: "https://imgnike-a.akamaihd.net/1920x1920/02611151.jpg"
    },
    {   
        link: "chuteira_mercurial",
        nome: "Chuteira Nike Mercurial",
        valor: "R$450,00",
        imagemUrl: "https://imgnike-a.akamaihd.net/1920x1920/022595IM.jpg"
    },
    {   
        link: "corta-vento_brasil",
        nome: "Corta-Vento Seleção Brasileira",
        valor: "R$350,00",
        imagemUrl: "https://imgnike-a.akamaihd.net/1920x1920/02337615.jpg"
    }
]

app.get('/', (req, res) => {
    res.render('home', {produtos})
})

app.get('/:id', (req, res) => {
    const id = req.params.id

    const produto = produtos.find((p) => p.link === id);

    res.render('detalhesProduto', {produto})
})


app.listen(3000)