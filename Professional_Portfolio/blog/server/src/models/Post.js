import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    content: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Aditya Ojha'
    },
    tags: [String]
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

export default Post;
