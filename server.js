const express = require("express")
const nunjucks = require("nunjucks")
const videos = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})

server.get("/", (req, res) => {
    const data = {
        nome: "Diego Reis",
        subtitulo: "Desenvolvedor",
        avatar:
            "https://avatars2.githubusercontent.com/u/39934318?s=400&u=b70f120044118da4f3326957dd8b8f35b0ec2f7d&v=4",
        descricao: "Teste a",
        github: "https://github.com/Ddiegoreis",
        twitter: "https://twitter.com/diegvreis",
        linkedin: "https://www.linkedin.com/in/diego-reis-28655119a/",
    }

    res.render("about", { data })
})

server.get("/classes", (req, res) => {
    res.render("classes", { items: videos })
})

server.get("/videos", (req, res) => {
    const id = req.query.id

    const video = videos.find((video) => video.id == id)

    if (!video) return res.send("Não encontrado")

    return res.render("video", { item: video })
})

server.listen(5000)
