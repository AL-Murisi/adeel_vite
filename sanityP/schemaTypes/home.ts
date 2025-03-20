import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'company_Name',
      title: 'company Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'homepage_content_text',
      title: 'home page text',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'homepage image',
      type: 'image',
      options: {
        hotspot: false,
      },
    }),
  ],
})
