import './assets/css/App.css'
import './assets/fonts/GrandHotel-Regular.ttf'
import './assets/fonts/Montserrat-Bold.ttf'
import './assets/fonts/Montserrat-Regular.ttf'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router'
import { Home } from './pages/Home/Home'
import { SearchResults } from './pages/SearchResults/SearchResult'
import Blog from './pages/Blog/BLog'
import ListPostsByCategories from './components/Blog/ListPostsByCategories'
import DetailPost from './components/Blog/DetailPost'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ListLastestPosts from './components/Blog/ListLastestPosts'

import ListPostsByTag from './components/Blog/ListPostsByTags'
import { Contact } from './pages/Contact/Contact'
import { Helmet } from 'react-helmet'
import { Unsubscribe } from './components/Unsubscribe'

import { Login } from './components/Admin/Login/Login'
import { Dashboard } from './components/Admin/Dashboard'
import RequireAuth from './components/Admin/RequireAuth'

import SiteFront from './components/Layout/SiteFront'
import Site from './components/Layout/Site'
import { ListDrinks } from './components/Admin/ListDrinks'
import { UpdateDrink } from './components/Admin/UpdateDrink'
import { CreateDrink } from './components/Admin/CreateDrink'

export function App () {
  return (
    <>

      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<SiteFront />}>
          <Route
            index
            element={
              <>
                <Helmet>
                  <title>Home | coffee time</title>
                  <meta name='description' content='At Coffee Time, we are passionate about coffee and we want to share that passion with you. With more than 10 years of experience in the world of coffee, we are experts in offering a unique and delicious experience to each cup. Discover our varieties of coffee of origin, medium and dark roast, and let yourself be surprised by our exclusive blend. In addition, we offer you tips and tricks to prepare the perfect coffee at home and enjoy an authentic coffee time at any time of the day. Join our community of coffee lovers and enjoy the best cup of coffee at all times!' />
                </Helmet>
                <Home />
              </>
          }
          />
          <Route
            path='blog'
            element={
              <>
                <Helmet>
                  <title>Blog | coffee time</title>
                  <meta name='description' content='In our blog you will find a wide variety of articles and advice on nutrition, from healthy and delicious recipes to tips for a balanced diet on a daily basis. Our team of nutrition experts will provide you with helpful, easy-to-follow information so you can make smart food choices and improve your well-being. In addition, you will find free resources, practical guides and online courses to learn more about nutrition and lead a healthy lifestyle. Join our community of nutrition lovers and transform your life through healthy eating!' />
                </Helmet>
                <Blog />
              </>
          }
          >
            <Route index element={<ListLastestPosts />} />
            <Route path='category/:idCategory/:titleCategory' element={<ListPostsByCategories />} />
            <Route path='category/:idCategory/:titleCategory/detail/:idPost/:titlePost' element={<DetailPost />} />
            <Route path='detail/:idPost/:titlePost' element={<DetailPost />} />
            <Route path='tag/:tag' element={<ListPostsByTag />} />
            <Route path='tag/:tag/detail/:idPost/:titlePost' element={<DetailPost />} />
          </Route>
          <Route
            path='/contact'
            element={
              <>
                <Helmet>
                  <title>Contact | coffee time</title>
                  <meta name='description' content='If you have any questions, suggestions, or just want to say hi, we should  love to hear from you! On our contact page, you can find detailed information on how to get in touch with us.' />
                </Helmet>
                <Contact />
              </>
}
          />
          <Route path='/search/:keyword' element={<SearchResults />} />
          <Route path='/unsubscribe' element={<Unsubscribe />} />
        </Route>

        {/* Admin */}

        <Route path='/admin' element={<Site />}>
          {/* Protected Routes */}
          <Route path='login' element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path='create-drink' element={<CreateDrink />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path='list-drinks' element={<ListDrinks />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path='update-drink/:id' element={<UpdateDrink />} />
          </Route>

        </Route>
        {/* Missing Route */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </>
  )
}
