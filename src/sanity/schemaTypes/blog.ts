import { defineField, defineArrayMember, defineType } from 'sanity'
export const blog = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "summary",
            title: "Summary",
            type: "text",
            description: "A brief description of the blog post",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true
            }

        }),
        defineField({
            name: "date",
            type: "date",
            title: "Date",
        }),
        defineField({
            name: "content",
            title: "Content",
            description: "Content of the blog post",
            type: "array",
            of: [
                defineArrayMember({
                    type: "block"

                }),
                defineArrayMember({
                    type: "image",
                    options: {
                        hotspot: true
                    }
                }),
            ]
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "author" }]
        })
    ]
})