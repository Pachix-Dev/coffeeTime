export const getSinglePost = async ({ idPost }) => {
  const url = `https://blogsapi.p.rapidapi.com/?id=${idPost}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c5d6650b97mshb269aff2ef18f2ep146482jsn89aed8e52fb6',
      'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    const posts = await response.json()
    if (posts.results.length > 0) {
      return posts.results?.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body,
        excerpt: post.excerpt,
        tags: post.tags,
        image: post.image,
        category: post.category,
        imageOwnerName: post.imageOwnerName,
        datePublished: post.date_published
      }))
    } else {
      return posts
    }
  } catch (error) {
    console.error(error)
  }
}
