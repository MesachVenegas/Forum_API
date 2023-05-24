const Post = require('../models/post.model');

class PostService {

    static async newPost(data) {
        try {
            const result = await Post.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = PostService
