const express = require('express');
const db = require('../helpers/postDb');
const router = express.Router();

// GET  get()
router.get('/', (req, res) => {
  db.get()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// GET BY ID  getById(id)
router.get('/:id', (req, res) => {
  const userId = req.body.user_id;
  const id = req.params.id;

  db.getById(id)
    .then(post => {
      console.log(id);
      if (!post) {
        res
          .status(404)
          .json({ error: 'User with the specified ID was not found!' });
      } else {
        res.status(200).json(post);
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// POST  insert(user)
router.post('/', (req, res) => {
  const userPost = req.body;

  db.insert(userPost)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({ error: 'Internal server error.' });
    });
});
// DELETE remove(id)
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(results => {
      if (results === 0) {
        res
          .status(404)
          .json({ error: 'User with the specified ID could not be found' });
      } else {
        res.status(200).json(results);
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not remove user' });
    });
});
// PUT  update(id, changes)
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.update(id, changes)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({ error: 'Internal server error.' });
    });
});

module.exports = router;
