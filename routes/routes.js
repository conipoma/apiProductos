const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"nombre": "Plátanos"});
});


module.exports = router;


