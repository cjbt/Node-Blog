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
router.get('/:userId/post', (req, res) => {
  const userId = req.params.userId;

  db.getUserPosts(userId)
    .then(userPost => {
      if (userPost.length === 0) {
        res
          .status(404)
          .json({ message: 'User with the specified ID was not found!' });
      } else {
        res.status(200).json(userPost);
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Internal server error' });
    });
});

// POST  insert(user)
router.post('/', (req, res) => {
  const user = req.body;

  db.insert(user)
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
  db.removeUserPosts(id)
    .then(() => {
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
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not remove posts of user' });
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
