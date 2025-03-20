import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'contact',
  title: 'تواصل',
  type: 'document',
  fields: [
    defineField({
      name: 'contact_text',
      title: 'معلومات عن الشركه',
      type: 'string',
    }),
    defineField({
      name: 'locations', // Changed to plural 'locations'
      title: 'المواقع', // Changed to plural 'المواقع'
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'location_name',
              title: 'اسم الموقع',
              type: 'string',
            }),
            defineField({
              name: 'mobile_number',
              title: 'الرقم',
              type: 'number',
            }),
            defineField({
              name: 'location_moreinf',
              title: 'معلومات اكثر عن الموقع',
              type: 'string',
            }),
            defineField({
              name: 'location_image',
              title: 'صوره الموقع',
              type: 'image',
              options: {
                hotspot: false,
              },
            }),
          ],
        },
      ],
    }),
  ],
})
