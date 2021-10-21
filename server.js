const express = require('express')
const cors = require('cors')
require('dotenv').config()
const router = require('./routes/index')
require('./config/database')
require('./config/passport')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
const PORT = process.env.PORT || 4000
const HOST = process.env.MYHOST || '0.0.0.0'
app.listen(PORT, HOST, () => console.log(`Server listening on ${HOST}:${PORT}`))