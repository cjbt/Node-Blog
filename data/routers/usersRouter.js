const express = require('express');
const db = require('../helpers/userDb');
const router = express.Router();

// GET  get()
router.get('/', (req, res) => {
  db.get()
    .then(users => {
      // console.log(users);
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// GET BY ID  getById(id)
router.get('/:id', (req, res) => {
  const id = req.params.id;

  db.getById(id)
    .then(user => {
      if (!user) {
        res
          .status(404)
          .json({ error: 'User with the specified ID was not found!' });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// GET USER POST  getUserPosts(userId)
router.get('/:id/post', (req, res) => {
  const userId = req.params.userId;

  db.getUserPosts(userId)
    .then()
    .catch();
});

// POST  insert(user)
router.post('/', (req, res) => {
  const user = req.body;

  db.insert(user)
    .then()
    .catch();
});
// DELETE remove(id)
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.remove(id)
    .then()
    .catch();
});
// PUT  update(id, changes)
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.update(id, changes)
    .then()
    .catch();
});

module.exports = router;
