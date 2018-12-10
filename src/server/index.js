const express = require("express");
const app = express()
const path = require("path")
const webpack = require("webpack")
const webpackConfig = require("../../webpack.config")
const compiler = webpack(webpackConfig)

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

// webpack hmr
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')))
app.use(webpackHotServerMiddleware(compiler))

// static assets
app.use(express.static("../public"))

// main route
// app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../public/index.html")))

// app start up
app.listen(3000, () => console.log("App listening on port 3000!"))
