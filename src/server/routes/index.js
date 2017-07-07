import express from 'express';
import account from './account';
import memo from './memo';

const router = express.Router();

router.use('/account', account);
router.use('/memo', memo);

router.get('/', (req,res) => {
    res.send("api route");
});

export default router;
