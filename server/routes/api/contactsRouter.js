import express from 'express';
import { footerDetails } from '../../../client/src/data/footer';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json(footerDetails);
  } catch (error) {
    next(error);
  }
  // res.json({ message: 'api contacts' });
});

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

// module.exports = router;
export { router };
