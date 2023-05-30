export const getLastestPosts = async () => {
  const url = 'https://blogsapi.p.rapidapi.com/?ordering=-date_published'

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a5cbd4abd3msh25455c408b638bdp156ed7jsn82840545485c',
      'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    const posts = await response.json()
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
  } catch (error) {
    console.error(error)
  }
}
