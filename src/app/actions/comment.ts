"use server";
import { client } from "@/sanity/lib/client";

export async function getComments(postId: string) {
    try {
        const query = `*[_type == "comment" && post._ref == $postId] | order(_createdAt desc)`;
        const data = await client.fetch(query, { postId });
        return data.map((comment: any) => ({
            id: comment._id,
            name: comment.name,
            text: comment.comment, // Ensure correct field names
            email: comment.email,
        }));
    } catch (err) {
        console.error("Error fetching comments:", err);
        return [];
    }
}


export async function AddComment({ name, email, comment, postId }: {
    name: string;
    email: string;
    comment: string;
    postId: string
}) {
    if (!name || !email || !comment || !postId) throw new Error("All fields are required");

    return await client.create({
        _type: "comment",
        name,
        email,
        comment,
        post: { _type: "reference", _ref: postId },
        createdAt: new Date().toISOString(),
    });
}