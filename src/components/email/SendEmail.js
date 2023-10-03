import nodemailer from 'nodemailer';

export const SendEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: '',
    port: 465,
    secure: true,
    auth: {
      user: '',
      pass: '',
    },
  });

  const options = {
    from: 'zatuchi01@gmail.com',
    to: 'felipe.ruiz0011@gmail.com',
    subject: 'Amazonian Tiles Customer',
    html: 'TESTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}