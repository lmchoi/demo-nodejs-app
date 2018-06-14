/**
 * Created by mchoi on 12/06/2018.
 */
'use strict'
import express from 'express'
import mongoose from 'mongoose'
import routes from './app/routes'
import * as db from './config/db'

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// datatstore ==============================================
var connectionsubject = mongoose.createConnection(db.urlSubjectViews)
var Subjects = connectionsubject.model('', {}, 'projects');
Subjects.find({'_projectid': 1}, function (err, subject) {
  if (err) return console.error(err);
  console.log(subject + '\n')
})

// routes ==================================================
const app = express()
routes(app) // pass our application into our routes

// start app ===============================================
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
