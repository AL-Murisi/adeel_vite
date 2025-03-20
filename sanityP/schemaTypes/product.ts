import {defineField, defineType} from 'sanity'
import {v4 as uuidv4} from 'uuid'
export default defineType({
  name: 'product',
  title: 'منتجات',
  type: 'document',
  fields: [
    defineField({
      name: 'product_name',
      title: 'اسم المنتج',
      type: 'string',
    }),
    defineField({
      name: 'product_price',
      title: 'السعر ',
      type: 'number',
    }),

    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      initialValue: () => uuidv4(), // Generate a random UUID
      readOnly: true, // Prevent manual editing
    }),

    defineField({
      name: 'product_imag',
      title: 'صوره المنتج',
      type: 'image',
      options: {
        hotspot: false,
      },
    }),
    defineField({
      name: 'product_usage',
      title: 'حول المنتج',
      type: 'text',
    }),
    defineField({
      name: 'product_feedback',
      title: 'نتائج المنتج',
      type: 'image',
    }),
  ],
})
