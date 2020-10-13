export const createSEOMeta = data => [
  {
    hid: 'description',
    name: 'description',
    content: data.description
  },
  {
    hid: 'og:description',
    name: 'og:description',
    content: data.description
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: data.description
  },
  {
    hid: 'og:title',
    name: 'og:title',
    content: data.title
  },
  {
    hid: `og:url`,
    property: 'og:url',
    content: data.url
  }
]
