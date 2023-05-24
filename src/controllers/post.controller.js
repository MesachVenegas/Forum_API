const PostService = require('../services/post.service');

const createNewPost = async (req, res) =>{
    try {
        const data = req.body;
        await PostService.newPost(data);
        res.status(201).send();
    } catch (error) {
        res.status(404).json(error);
    }
}

module.exports = {
    createNewPost
}