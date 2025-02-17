"use client";

import { AddComment, DelHandler, getComments } from "@/app/actions/comment";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { Trash } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  text: string;
  email: string;
}

const CommentSection = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch comments on mount and when postId changes
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments(postId);
      setComments(comments);
    };
    fetchComments();

    const subscription = client
      .listen(
        `*[_type == "comment" && post._ref == $postId] | order(_createdAt desc)`,
        { postId }
      )
      .subscribe((update) => {
        if (update.result) {
          setComments((prev) => [update.result as unknown as Comment, ...prev]);
        }
      });

    return () => subscription.unsubscribe();
  }, [postId]);

  const addComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    setLoading(true);

    await AddComment({
      name: newName,
      email: newEmail,
      comment: newComment,
      postId,
    });

    // Fetch updated comments
    const updatedComments = await getComments(postId);
    setComments(updatedComments);

    setNewComment("");
    setNewName("");
    setNewEmail("");
    setLoading(false);
  };

  async function handleDelete(commentId: string) {
    const response = await DelHandler(commentId);

    if (response.success) {
      setComments(comments.filter((comment) => comment.id !== commentId));
    }
  }
  return (
    <>
      <h2 className="text-3xl font-semibold my-5 uppercase">
        Add your thought here
      </h2>
      <form onSubmit={addComment} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          required
          className="border p-2"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="border p-2"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <textarea
          placeholder="Comment"
          required
          className="border p-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {comments.length > 0 ? (
        <div className="w-full my-8 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <div className="space-y-4">
            {comments.map((comment, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-2 border-b"
              >
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span>{comment.name.charAt(0).toUpperCase()}</span>
                </div>
                <div className="flex-1">
                  <div className="flex gap-4 items-center font-medium">
                    <p className="font-semibold">{comment.name}</p>
                    <p className="text-sm text-gray-600">{comment.email}</p>
                  </div>
                  <p className="text-gray-600">{comment.text}</p>
                </div>
                <div className="del">
                  <Trash
                    color="red"
                    size={18}
                    cursor={"pointer"}
                    onClick={() => handleDelete(comment.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-center font-semibold my-8 text-2xl">
          No Comments Added Yet!
        </h2>
      )}
    </>
  );
};

export default CommentSection;
