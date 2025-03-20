import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'footer_header',
  title: 'التنقل وصوره ال لوجو مع وصفحه الفيس وانستجرام وواتس',
  type: 'document',
  fields: [
    defineField({
      name: 'ig_acount',
      title: 'حساب الانستقرام',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp_number',
      title: 'رقم الواتساب ',
      type: 'number',
    }),
    defineField({
      name: 'facebook_acount',
      title: 'حساب الفيس بوك',
      type: 'string',
    }),
    defineField({
      name: 'footer_text',
      title: 'كتابه في آخر الصفحه',
      type: 'string',
    }),
    defineField({
      name: 'company_Name',
      title: 'اسم الشركه',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'لوجو الشركه',
      type: 'image',
      options: {
        hotspot: false,
      },
    }),
  ],
})
