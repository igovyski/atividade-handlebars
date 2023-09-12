const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const products = [
    {
        link: "/camisa_corinthians",
        nome: "Camisa Corinthians",
        valor: "R$250,00"
    },
    {   
        link: "/chuteira_mercurial",
        nome: "Chuteira Nike Mercurial",
        valor: "R$450,00"
    },
    {   
        link: "/corta-vento_brasil",
        nome: "Corta-Vento Seleção Brasileira",
        valor: "R$350,00"
    }
]

app.get('/', (req, res) => {
    res.render('home', {products})
})

app.get('/:id', (req, res) => {
    const id = req.params.id

    const product = products.map(product => {
        return product.link === id
    })

    res.render('home')
})


app.listen(3000)