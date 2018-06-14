/**
 * Created by mchoi on 12/06/2018.
 */
'use strict'
import express from 'express'
import routes from './app/routes'

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

// routes ==================================================
routes(app) // pass our application into our routes

// start app ===============================================
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
