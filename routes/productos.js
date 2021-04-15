const { Router } = require('express');
const router = Router();

const products = require('../jsons.json');

router.get('/productos', (req,res) => {
    res.send(products);
});



module.exports = router;
