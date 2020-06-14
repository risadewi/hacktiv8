
// merujuk express, body-parser
let express = require("express");
let app = express();

// jwt
let jwt = require("jsonwebtoken");

// untuk sementara kita anggap variable db ini sebagai sumber data kita

let data = {
  user: "Fauzan",
  passw: "tianacantik"
};

// routing pada express
app.get("/", (request, response) =>
  response.send("Selamat Datang di Integrasi JWT Tiana")
);

// verif

function verifikasi(req, res, next) {
  let getHeader = req.headers["auth"];
  if (typeof getHeader !== "undefined") {
    req.token = getHeader;
    next();
  } else {
    response.sendStatus(403);
  }
}

jwt.sign(
  {
    data: data
  },
  "secret",
  (err, token) => {
    console.log(token);
  }
);

// memberikan list biodata

app.get("/data", verifikasi, (request, response) => {
  jwt.verify(request.token, "secret", (err, dataAuth) => {
    if (err) {
      response.sendStatus(403);
    } else {
      response.json(data);
    }
  });
});

// listen

app.listen(3000, () => console.log("Aplikasi Berjalan Pada localhost:3000"));