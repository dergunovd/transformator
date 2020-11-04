const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 4001;

app.use(bodyParser.json());
const whitelist = [
  "https://transformator.media",
  "http://transformator.dergunov.net",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

let transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "info@transformator.media", // generated ethereal user
    pass: "gymcmnivtgyiqnsk", // generated ethereal password
  },
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/send", async (req, res) => {
  const info = await transporter
    .sendMail({
      from: '"Трансформатор Production" <info@transformator.media>',
      to: req.body.email,
      subject: "Презентация",
      attachments: [
        {
          // use URL as an attachment
          filename: "presentation.pdf",
          path: "https://transformator.media/presentation.pdf",
        },
      ],
      html: `Привет! Лови презентацию во вложении к этому письму. Будем рады поработать вместе ⚡️
        <br/>
        <br/>
        Отвечать на данное письмо не нужно. Но если хочешь с нам поболтать,
        то пиши в WhatsApp или звони: <a href="tel:+79255556767">+7 925 555 67 67</a>`,
    })
    .catch(res.error);
  console.log("Message sent: %s", info);
  res.sendStatus(200);
});

app.post("/get", async (req, res) => {
  const data = req.body;

  const info = await transporter
    .sendMail({
      from: '"Трансформатор Production" <info@transformator.media>',
      to: "info@transformator.media",
      subject: "Заявка с сайта",
      html: `<ul><li>Продукт: <b>${data.product}</b><li>Имя: <b>${data.name}</b></li><li>Телефон: <b>${data.phone}</b></li></ul>`,
    })
    .catch(res.error);
  console.log("Message sent: %s", info);
  res.sendStatus(200);
});

app.post("/feedback", async (req, res) => {
  const data = req.body;

  const info = await transporter
    .sendMail({
      from: '"Трансформатор Production" <info@transformator.media>',
      to: "info@transformator.media",
      subject: "Сообщение с сайта",
      html: `<ul><li>Имя: <b>${data.name}</b></li><li>Телефон: <b>${data.phone}</b></li></ul><br/><p>{data.message}</p>`,
    })
    .catch(res.error);
  console.log("Message sent: %s", info);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
