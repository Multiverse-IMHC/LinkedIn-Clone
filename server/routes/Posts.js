const express = require('express');
const { Post } = require('react-axios');
const router = express.Router();

const { Item } = require("../models");

//Post 
router.post("/", async (req, res, next) => {
    try {
        const addPost = await Post.create(req.body);
        res.json(addPost);
    } catch (error) {
        next(error);
    }
});

//Delete
router.delete("/:id", async (req, res, next) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        const post = await Post.findAll(deletePost);
        res.json(post);
    } catch (error) {
        next(error);
    }
});

//Update
router.put("/:id", async (req, res, next) => {
    try {
        const [updatedPost, updatedPosts] = await Post.update(req.body,{
            where: {
                id: req.params.id
            },
            returning: true
        });
        res.send(updatedPosts[0]);
    } catch (error) {
        next(error);
    }
});

module.exports = router;