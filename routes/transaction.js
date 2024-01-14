const { registerUser, loginUser } = require('../controllers/user')
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.post('/register-user', registerUser)

router.post('/signin-user', loginUser)

module.exports = router