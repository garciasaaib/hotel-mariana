const express = require('express');
const { User, Post } = require('../models');

const router = express.Router();
router.get('/authors', async (req, res) => {
  const result = await User.findAll({
    include: [
      {
        association: User.Posts,
        attributes: ['id', 'title'],
        required: true
      }
    ]
  })
  res.json({ hello: result })
})

router.post('/post', async (req, res) => {
  const { title, content, userId } = req.body
  try {
    const author = await User.findByPk(userId);
    if (!author.id) res.json({ msg: "no se encontro el author" })
    const result = await Post.create({
        title,
        content,
        userId
    }, {
      // include:[Post.Author]
    })
    res.json({ hello: result })
  } catch (error) {
    res.json({ msg: "no se encontro el author" })
  }

})
module.exports = router