import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cups from '../../assets/img/blackcofees.webp'
import fondo4 from '../../assets/img/fondo4.png'
import fondo5 from '../../assets/img/fondo5.png'
import fondo6 from '../../assets/img/fondo6.png'
import hotcoffee from '../../assets/img/hotcoffee.webp'
import whitecoffees from '../../assets/img/whitecoffees.webp'
import newyork from '../../assets/img/newyork.jpg'
import jakaranda from '../../assets/img/jakaranda.jpg'
import paris from '../../assets/img/paris.jpg'
import './Home.css'
import { TwitterFollowCard } from '../../components/Twittercard/TwitterFollowCard'
import { arregloUsers } from '../../components/Twittercard/constans.js'
import { motion } from 'framer-motion'
import { ModalTicket } from '../../components/ModalTicket/ModalTicket'
import { IconsAnimate } from '../../components/IconsAnimate/IconsAnimate'

export function Home () {
  return (

    <main>
      <IconsAnimate />
      <section className='block-home-1'>
        <div className='fondo1' />
        <div className='fondo2 '>
          <Container className='mt-5'>
            <Row className='pt-5'>
              <Col xl={6} md={12}>
                <motion.div
                  className='infotext'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                >
                  <h1 className='mt-5'>Enjoy Coffee</h1>
                  <p className='mt-5'>
                    Coffee Time, we are passionate about coffee and we want to share that passion with you. With more than 10 years of experience in the world of coffee, we are experts in offering a unique and delicious experience to each cup. Discover our varieties of coffee of origin, medium and dark roast, and let yourself be surprised by our exclusive blend. In addition, we offer you tips and tricks to prepare the perfect coffee at home and enjoy an authentic coffee time at any time of the day. Join our community of coffee lovers and enjoy the best cup of coffee at all times!
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className='block-home-2'>
        <Container className='pt-5'>
          <Row className='pt-5'>
            <Col sm={7} xl={7} className='my-auto'>
              <motion.div
                className='text-center infotext'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                viewport={{ once: true, amount: 'all' }}
              >
                <h1>Black coffees</h1>
              </motion.div>
            </Col>
            <Col sm={5} xl={5}>
              <motion.div
                className='infotext text-center'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                viewport={{ once: true, amount: 'all' }}
              >
                <img src={cups} className='w-100' alt='black-coffees' loading='lazy' />
                <p className='mt-4'>Black Coffees is the perfect choice for those looking for an intense and flavorful coffee experience. Our coffee beans are carefully selected from the best growing regions in the world and roasted to perfection to deliver a full, rich flavor. Every cup of Black Coffees black coffee offers a unique experience, with flavor notes ranging from dark chocolate to sweet caramel.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <img src={fondo4} className='w-100' alt='fondo4-cofee-time' loading='lazy' />

      <section className='block-home-3'>
        <Container className='pt-5'>
          <Row className='pt-5'>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }}>
              <motion.div
                className='text-center infotext'
                initial={{ x: -10, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 1
                  }
                }}
                viewport={{ once: true, amount: 'all' }}
              >
                <img src={hotcoffee} className='w-100' alt='hot-coffee-time' loading='lazy' />
                <p className='mt-5'>Hot Coffees are the perfect choice for those looking for a warm and comforting coffee experience. Our high-quality coffee beans are roasted to perfection to deliver a full, rich flavor in every cup. Our hot coffees are perfect to enjoy at any time of the day, either to start the morning with energy or to take a break during the afternoon.
                </p>
              </motion.div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 7, order: 1 }} className='my-auto'>
              <motion.div
                className='text-center infotext'
                initial={{ x: 50, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 1
                  }
                }}
                viewport={{ once: true, amount: 'all' }}
              >
                <h1>Hot coffees</h1>
              </motion.div>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col sm={7} xl={7} className='my-auto'>
              <motion.div
                className='text-center infotext'
                initial={{ x: -10, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 1.5
                  }
                }}
                viewport={{ once: true, amount: 'all' }}
              >
                <h1>white coffees</h1>
              </motion.div>
            </Col>
            <Col sm={5} xl={5}>
              <motion.div
                className='text-center infotext'
                initial={{ x: 50, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 1.5
                  }
                }}
                viewport={{ once: true, amount: 'all' }}
              >
                <img src={whitecoffees} className='w-100' alt='white-coffees' loading='lazy' />
                <p className='mt-5'>White Coffees are the perfect choice for those looking for a smooth and creamy coffee experience. We use high-quality coffee beans and blend them with fresh, creamy milk to create a smooth, delicious cup of coffee. Our expert baristas strive to prepare each cup with precision and care, ensuring that each sip is an experience like no other.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col className='my-auto'>
              <motion.div
                className='text-center infotext'
                initial={{ y: 30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 1.5
                  }
                }}
                viewport={{ once: true, amount: 'some' }}
              >
                <h1>Voucher</h1>
                <p>Get your exclusive discount now!!!</p>
                <ModalTicket />

              </motion.div>
            </Col>
          </Row>
          <motion.div
            className='pt-5 text-center infotext'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1.5
              }
            }}
            viewport={{ once: true, margin: '-150px' }}
          >
            <h1>Customer Reviews</h1>

            <Row className='pt-5'>
              {
              arregloUsers.map(arregloUsers => {
                const { key, username, name, isFollowing, review } = arregloUsers
                return (
                  <Col key={key} xs={12} md={4}>
                    <TwitterFollowCard
                      id={key}
                      username={username}
                      name={name}
                      initialIsFollowing={isFollowing}
                      review={review}
                    />
                  </Col>
                )
              })
            }
            </Row>
          </motion.div>
        </Container>
        <img src={fondo5} className='w-100' alt='fondo5-coffe-time' loading='lazy' />
      </section>

      <section className='block-home-4'>
        <Container className='text-center'>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1.5
              }
            }}
            viewport={{ once: true, amount: 'all' }}
          >
            <h1 className='pt-5'>We are Open</h1>
            <h2 className='pt-5'>Monday - friday</h2>
            <p>10:00 am - 10:00pm </p>
            <h2 className='pt-5'>Saturday and Sunday</h2>
            <p className='m-0'>10:00 am - 10:10pm </p>
          </motion.div>
        </Container>
      </section>

      <img src={fondo4} className='w-100' alt='fondo4-coffe-time' loading='lazy' />

      <section className='block-home-5'>
        <Container className='text-center'>
          <motion.h1
            className='pt-5'
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1.5
              }
            }}
            viewport={{ once: true, amount: 'all' }}
          >Our Branches
          </motion.h1>
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 1.5
                    }
                  }}
                  viewport={{ once: true, amount: 'some' }}
                >
                  <img src={newyork} className='w-100' alt='newyork-cofee-time' loading='lazy' />
                  <div className='m-4'><span>New York</span></div>
                  <p>Our New York coffee shop is the perfect place to enjoy a high-quality cup of coffee in one of the world's most vibrant cities. Located in the heart of the city, our branch offers a cozy and modern environment, ideal for relaxing and enjoying a moment of rest in the midst of the hustle and bustle of the city. At our branch, we offer a wide variety of coffees, from the classic black coffee to more special options such as lattes or cappuccinos.</p>
                </motion.div>
              </Col>
              <Col xs={12} md={4}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 1.5
                    }
                  }}
                  viewport={{ once: true, amount: 'some' }}
                >
                  <img src={jakaranda} className='w-100' alt='jakaranda-coffee-time' loading='lazy' />
                  <div className='m-4'><span>Jakaranda</span></div>
                  <p>Welcome to our coffee branch in Jacaranda, an oasis in the middle of the bustle of the city. At our branch, we offer a unique and delicious coffee experience, with high-quality coffee beans and a wide variety of beverage options, from classic black coffee to more specialty options like lattes or cappuccinos. Our team of expert baristas pride themselves on preparing each cup of coffee with precision and care, ensuring that each sip is an unforgettable experience.</p>
                </motion.div>
              </Col>
              <Col xs={12} md={4}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 1.5
                    }
                  }}
                  viewport={{ once: true, amount: 'some' }}
                >
                  <img src={paris} className='w-100' alt='paris-coffee-time' loading='lazy' />
                  <div className='m-4'><span>Paris</span></div>
                  <p>Our coffee branch in Paris is a must-see destination for coffee lovers visiting the city of lights. Located in one of the most historic and picturesque neighborhoods in the city, our branch is a cozy and modern oasis where you can enjoy a high-quality cup of coffee. At our branch, we offer a wide variety of coffees, from the classic black coffee to more special options such as lattes or cappuccinos, prepared by our expert baristas. We will wait for you!</p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <img src={fondo6} className='w-100' alt='fondo6-coffee-time' loading='lazy' />
    </main>
  )
}
