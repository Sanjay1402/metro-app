const nodemailer = require('nodemailer');

const sendEmail =  async (req, res) => {
   
    const { email, message } = req.body;

    const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'hardy91@ethereal.email',
            pass: 'nmNmHCZ7hB76JK1sEQ'
        }
    })

    const info = await transporter.sendMail({
        from: '"Co-Ventech" <info@coventech.com>', // sender address
        to: email, // list of receivers
        subject: "Your message has been received!", // Subject line
        text: message, // plain text body
        html: `<b>You sent: ${message}</b>`, // html body
      });

      res.json(info);
};

module.exports = sendEmail