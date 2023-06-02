import { render } from '@react-email/render'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

import { Email } from '../components/Email/Email'

const client = new SESClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
  }
})

export function sendMessageService (dataForm) {
  const emailHtml = render(
    <Email
      url='https://github.com/Pachix-Dev/aprendiendo-react/tree/main/projects/00-coffee-time'
      fullname={dataForm.fullname}
      email={dataForm.email}
      message={dataForm.message}
    />
  )

  const options = new SendEmailCommand({
    Source: 'hola@yapura.com.mx',
    Destination: {
      ToAddresses: [dataForm.email]
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: emailHtml
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Thanks for visit my website'
      }
    }
  })

  return client.send(options)
}
