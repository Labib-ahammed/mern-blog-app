import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "https://via.placeholder.com/300x200",
        },
        category: {
            type: String,
            default: 'uncategorized'
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        }
    },
    { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)
export default Post;