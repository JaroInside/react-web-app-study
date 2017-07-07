import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
    res.send("api route");
});

export default router;