import Post from '../models/Post.js';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json({ success: true, data: posts });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPost = async (req, res) => {
    try {

        const postData = req.body;
        const newPost = await Post.create(postData);

        res.status(201).json({
            success: true,
            data: newPost
        });

    }

    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

export const deletePost = async (req, res) => {

    try {

        const postId = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }

        res.status(200).json({
            success: true,
            data: deletedPost
        })

    }

    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }

}

export const updatePost = async (req, res) => {

    try {

        const postID = req.params.id;
        const updateData = req.body;

        //for the moongoose side
        const updatedPost = await Post.findByIdAndUpdate(postID, updateData, {
            new: true
        });

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }

        res.status(200).json({
            success: true,
            data: updatedPost
        })

    }

    catch (error) {
        res.status(500).json({
            error: error.message
        });

    }

};

export const getPostBySlug = async (req, res) => {

    try {
        const slug = req.params.slug;
        console.log("🔍 Requested Slug:", slug); // Debug Log 1

        const post = await Post.findOne({ slug });
        console.log("📦 DB Result:", post);       // Debug Log 2

        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }

        res.status(200).json({
            success: true,
            data: post
        })

    }

    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}