import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'aboutus',
  title: 'من نحن',
  type: 'document',
  fields: [
    defineField({
      name: 'company_name',
      title: 'اسم الشركة',
      type: 'string',
    }),
    defineField({
      name: 'about_the_company',
      title: 'حول الشركة ',
      type: 'string',
    }),
    defineField({
      name: 'why_chose_us',
      title: 'لماذا تختارنا؟',
      type: 'string',
    }),
    defineField({
      name: 'product_images',
      title: 'صور المنتج',
      type: 'array',
      of: [{type: 'image', options: {hotspot: false}}],

      validation: (Rule) => Rule.required().min(5).max(5).error('يجب رفع 5 صور فقط'),
    }),
  ],
})
