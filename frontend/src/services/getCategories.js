export const getCategories = async () => {
  const url = 'https://blogsapi.p.rapidapi.com/categories/'

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a5cbd4abd3msh25455c408b638bdp156ed7jsn82840545485c',
      'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com'
    }
  }
  try {
    const response = await fetch(url, options)
    const categories = await response.json()
    return categories?.map(category => ({
      id: category.id,
      title: category.title,
      categoryDesc: category.categoryDesc,
      categoryImage: category.categoryImage

    }))
  } catch (error) {
    console.error(error)
    return new Response('Internal Error', { status: 500 })
  }
}
