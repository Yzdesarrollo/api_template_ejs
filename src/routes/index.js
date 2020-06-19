const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('index.ejs')
});

router.get('/products', (req, res)=>{
    res.render('new-entry.ejs')
});

module.exports = router;