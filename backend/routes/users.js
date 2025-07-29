const express = require('express');
const router = express.Router();

// In-memory users data
let users = [
  { id: 1, name: 'John', workouts: ['Pushups', 'Squats'] },
  { id: 2, name: 'Jane', workouts: ['Running', 'Plank'] }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST a new user
router.post('/', (req, res) => {
  const { name, workouts } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    workouts
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
