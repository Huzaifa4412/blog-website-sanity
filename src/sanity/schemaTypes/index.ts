import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { author } from './author'
import { comments } from '../lib/comment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author, comments],
}
