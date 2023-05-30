/* SEO URL friendly */
export const beautifyURL = (url) =>
  url
    .replace(/\s/g, '-')
    .replace(/-+/g, '-')
    .replace(/[^a-å0-9-]/gi, '')
    .toLowerCase()

/* Format date friendly */
export function beautifyDate (date) {
  const event = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return event.toLocaleDateString('en-US', options)
}
