const emailLayout = (fullname) => {
  return (
 `<table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 680px; width: 100%; margin: 0px auto; background-color: rgb(255, 255, 255);">
  <tbody>
    <tr style="width: 100%;">
      <td>
        <table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-radius: 5px 5px 0px 0px; display: flex; background-color: rgb(34, 40, 49);">
          <tbody style="width: 100%;">
            <tr style="width: 100%;">
              <td style="padding: 20px 30px 15px;">
                <h1 style="color: rgb(255, 255, 255); font-size: 27px; font-weight: bold; line-height: 27px;">Hello , ${fullname}</h1>
                <p style="font-size: 17px; line-height: 24px; margin: 16px 0px; color: rgb(255, 255, 255);">It is a pleasure to greet you, give me a little star ⭐ if you liked this website 😎</p>
              </td>
              <td style="padding: 30px 10px;">
                <img src="https://yapura.com.mx/coffeeTime/coffeeTimelogo2.png" width="240" style="display: block; outline: none; border: none; text-decoration: none;">
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="padding: 30px 30px 40px;">
          <tbody>
            <tr>
              <td>
                <h2 style="margin: 0px 0px 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: rgb(12, 13, 14);">Did you like what you saw?</h2>
                <p style="font-size: 15px; line-height: 21px; margin: 16px 0px; color: rgb(60, 63, 68);">Thanks for visit my website, I really appreciate your visit, if you are interested in knowing more, you can see the repository of this project in my github account <a href="https://github.com/Pachix-Dev" target="_blank" style="color: rgb(6, 125, 247); text-decoration: none;">github.com/Pachix-Dev</a>
                </p>
                <hr style="width: 100%; border-top: 1px solid rgb(234, 234, 234); border-right: none; border-bottom: none; border-left: none; border-image: initial; margin: 30px 0px;">
                <h2 style="margin: 0px 0px 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: rgb(12, 13, 14);">If you liked what you saw take a break and read about Resend</h2>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-top: 24px; display: block;">
                  <tbody>
                    <tr>
                      <td>
                        <a href="https://resend.com/docs/introduction" target="_blank" style="color: rgb(255, 255, 255); text-decoration: none; background-color: rgb(41, 161, 156); font-size: 17px; line-height: 17px; padding: 13px 17px; border-radius: 4px; max-width: 120px;">I need a break</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 680px; margin: 32px auto 0px; padding: 0px 30px;">
  <tbody>
    <tr>
      <td>
        <p style="font-size: 12px; line-height: 15px; margin: 0px; color: rgb(145, 153, 161);">
          You're receiving this email because you visit my website and use the contact form.
        </p>
        <a href="https://yapura.com.mx/coffeeTime/unsubscribe" target="_blank" style="color: rgb(145, 153, 161); text-decoration: underline; display: inline-block; font-size: 12px; margin-right: 10px; margin-bottom: 0px; margin-top: 8px;">Unsubscribe from emails like this </a>
        
        <hr style="width: 100%; border-top: 1px solid rgb(214, 216, 219); border-right: none rgb(214, 216, 219); border-bottom: none rgb(214, 216, 219); border-left: none rgb(214, 216, 219); border-image: initial; margin: 30px 0px;">
        <p style="font-size: 12px; line-height: 15px; margin: 4px 0px; color: rgb(145, 153, 161);">
          <strong>FYC</strong>, León Guanajuato México
        </p>
      </td>
    </tr>
  </tbody>
</table>`
  )
}

module.exports = emailLayout
