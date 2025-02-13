import { defineType, defineField } from "sanity";
export const comments = defineType({
    name: "comment",
    type: "document",
    title: "Comment",
    fields: [
        defineField(
            {
                name: "name",
                type: "string",
                title: "Name",
                validation: (Rule) => Rule.required(),
            },
        ),
        defineField({
            name: "comment",
            type: "text",
            title: "Comments",
            validation: (Rule) => Rule.required().min(5).max(200),
        }),
        defineField({
            name: "postId",
            type: "reference",
            title: "Post ID", // Links comment to a specific post/todo
            to: [{ type: "blog" }],
            validation: (Rule) => Rule.required(),
        }),
        {
            name: "createdAt",
            type: "datetime",
            title: "Created At",
            initialValue: new Date().toISOString(),
        },
    ],
});
