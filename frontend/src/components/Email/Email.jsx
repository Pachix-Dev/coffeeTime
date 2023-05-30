import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Text,
  Section,
  Heading,
  Hr
} from '@react-email/components'
import * as React from 'react'
import logocoffee from '../../assets/img/coffeeTimelogo2.png'
const baseUrl = import.meta.env.VITE_BASE_URL
  ? `https://${import.meta.env.VITE_BASE_URL}`
  : ''
export function Email (props) {
  const { url } = props
  return (
    <Html>
      <Head />
      <Preview>Thanks for visit my website</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row style={header}>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>
                Hello {props.fullname},
              </Heading>
              <Text style={headerContentSubtitle}>
                It is a pleasure to greet you, give me a little star ⭐ if you liked this website 😎
              </Text>
            </Column>
            <Column style={headerImageContainer}>
              <Img
                width={240}
                src={`${baseUrl + logocoffee}`}
              />
            </Column>
          </Row>

          <Section style={content}>
            <Heading as='h2' style={title}>
              Did you like what you saw?
            </Heading>
            <Text style={paragraph}>
              Thanks for visit my website, I really appreciate your visit, if you are interested in knowing more,
              you can see the repository of this project in my github account <Link href={url} className='text-blue-600 no-underline'>github.com/Pachix-Dev</Link>
            </Text>

            <Hr style={divider} />

            <Heading as='h2' style={title}>
              If you liked what you saw take a break and read about react-mail
            </Heading>

            <Section style={buttonContainer}>
              <Link style={button} href='https://react.email/docs/introduction'>
                I need a break
              </Link>
            </Section>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={footerText}>
            You're receiving this email because you visit my website and use the contact form.
          </Text>
          <Hr style={footerDivider} />
          <Text style={footerAddress}>
            <strong>FYC</strong>, León Guanajuato México
          </Text>
        </Section>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f3f3f5',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif'
}

const headerContent = { padding: '20px 30px 15px' }

const headerContentTitle = {
  color: '#fff',
  fontSize: '27px',
  fontWeight: 'bold',
  lineHeight: '27px'
}

const headerContentSubtitle = {
  color: '#fff',
  fontSize: '17px'
}

const headerImageContainer = {
  padding: '30px 10px'
}

const title = {
  margin: '0 0 15px',
  fontWeight: 'bold',
  fontSize: '21px',
  lineHeight: '21px',
  color: '#0c0d0e'
}

const paragraph = {
  fontSize: '15px',
  lineHeight: '21px',
  color: '#3c3f44'
}

const divider = {
  margin: '30px 0'
}

const container = {
  maxWidth: '680px',
  width: '100%',
  margin: '0 auto',
  backgroundColor: '#ffffff'
}

const footer = {
  width: '680px',
  margin: '32px auto 0 auto',
  padding: '0 30px'
}

const content = {
  padding: '30px 30px 40px 30px'
}

const header = {
  borderRadius: '5px 5px 0 0',
  display: 'flex',
  flexDireciont: 'column',
  backgroundColor: '#222831'
}

const buttonContainer = {
  marginTop: '24px',
  display: 'block'
}

const button = {
  backgroundColor: '#29a19c',
  fontSize: '17px',
  lineHeight: '17px',
  padding: '13px 17px',
  borderRadius: '4px',
  maxWidth: '120px',
  color: '#fff'
}

const footerDivider = {
  ...divider,
  borderColor: '#d6d8db'
}

const footerText = {
  fontSize: '12px',
  lineHeight: '15px',
  color: '#9199a1',
  margin: '0'
}

const footerAddress = {
  margin: '4px 0',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#9199a1'
}
