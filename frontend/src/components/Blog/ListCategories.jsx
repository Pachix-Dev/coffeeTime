
import { Suspense, lazy } from 'react'
import './main.css'
import LoaderCategoriesBlog from '../../components/Loaders/LoaderCategoriesBlog'
import { motion } from 'framer-motion'
const SingleCategory = lazy(() => import('./SingleCategory.jsx'))

export default function ListCategories ({ categories }) {
  return (
    <>
      <h1>Categories</h1>
      <div className='allCategories'>

        {categories.length !== 0
          ? categories.map(categorie => {
            const { id, title, categoryDesc, categoryImage } = categorie
            return (

              <Suspense key={id} fallback={<LoaderCategoriesBlog />}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                  viewport={{ once: true, amount: 'some' }}
                >
                  <SingleCategory
                    id={id}
                    title={title}
                    categoryDesc={categoryDesc}
                    categoryImage={categoryImage}
                  />
                </motion.div>
              </Suspense>

            )
          })
          : ''}
      </div>
    </>
  )
}
