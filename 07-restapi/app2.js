// merujuk express, body-parser
const express = require("express");
const bodyParser = require("body-parser");

// instansiasi obejct express dan di simpan pada konstanta app
const app = express();

// gunakan body parser sebgai middleware
app.use(bodyParser.json());

let db = [
    {
      id: 1,
      name: "Fauzan",
      hobi: "futsal",
      alamat: "jaksel"
    },
    {
      id: 2,
      name: "Raka",
      hobi: "tidur",
      alamat: "jaktim"
    },
    {
      id: 3,
      name: "Tiana",
      hobi: "belaja",
      alamat: "jaksel"
    }
  ];

  // memberikan list biodata

// contoh routing pada express
app.get("/", (request, response) =>
  response.send("Selamat Datang di Rest API Tiana")
);

// listen
app.listen(3000, () => console.log("Aplikasi Berjalan Pada localhost:3000"));



app.get("/data", (request, response) => {
    return response.json(db);
  });

// memberikan data spesifik sesuai dengan nama yang ada pada url

app.get("/data/:name", (request, response) => {
    const result = db.filter(val => {
      return (
        val.name.toLocaleLowerCase() === request.params.name.toLocaleLowerCase()
      );
    });
    return response.json(result);
  });

// Endpoint Create

app.post("/data", (request, response) => {
    const newData = {
      id: db.length + 1,
      name: request.body.name,
      hobi: request.body.hobi,
      alamat: request.body.alamat
    };
    db.push(newData);
    console.log(request);
    return response.json(newData);
  });

  app.put("/data/:name", (request, response) => {
    const theData = db.filter(val => {
      return (
        val.name.toLocaleLowerCase() === request.params.name.toLocaleLowerCase()
      );
    });
    if (theData === null) {
      return response.json("Not Found");
    }
    const newData = {
      id: theData[0].id,
      name: request.body.name || theData[0].name,
      hobi: request.body.hobi || theData[0].hobi,
      alamat: request.body.alamat || theData[0].alamat
    };
    db.push(newData);
    return response.json(newData);
  });