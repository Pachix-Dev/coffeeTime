import Container from 'react-bootstrap/esm/Container'
import useCategories from '../../hooks/useCategories'
import ListCategories from '../../components/Blog/ListCategories'
import { Outlet } from 'react-router'
import { motion } from 'framer-motion'
import './Blog.css'

export default function Blog () {
  const { categories } = useCategories()
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.header
        className='blog-header pt-5 mt-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <div className='blog-header-title p-5'>
          <h1>Community</h1>
        </div>
      </motion.header>
      <Container className='pt-5 mt-5 blog-wrapper'>
        <ListCategories categories={categories} />
        <Outlet />
      </Container>
    </motion.main>
  )
}
