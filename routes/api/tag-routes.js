const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  }
  catch (e) {
    res.status(404).json(e);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data]
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tag);
  } catch (e) {
    res.status(500).json(e)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{ 
    const tags = await Tag.create({
      tag_id: req.body.tag_id
    });
    res.status(200).json(tags);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tags = await Tag.put({
      tag_id: req.body.tag_id,
    });
    res.status(200).json(tags)
  } catch (e) {
    res.status(404).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (e) {
    console.log(e)
  }
});

module.exports = router;