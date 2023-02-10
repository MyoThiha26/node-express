const express = require("express");
const dotenv = require("dotenv");
const app = express();
// const birdRouter = require("./routes/bird-router.js");
// const userRouter = require("./routes/user-router.js");
const port = 3000;
dotenv.config();
const API_URL = process.env.API_URL;
const users = [
  {
    id: 1,
    name: "Myo Thiha",
  },
  {
    id: 2,
    name: "Peter",
  },
];
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type='text/javascript'>
        console.log("${API_URL}");
        localStorage.setItem("apiUrl", "${API_URL}");
        window.location.href = '/';
    </script>
</body>
</html>
  `;
app.use(express.static("public"));
// app.use("/birds", birdRouter);
// app.use("/users", userRouter);

////// View AND Pug  ///////
// app.set("views", "./views");
// app.set("view engine", "pug");

// app.get("/avatar", (req, res) => {
//   res.render("profile", { title: "Hey", message: "I am PUG" });
// });

app.get("/api", (req, res) => {
  res.send(html);
});

////// View AND Pug ///////
app
  .route("/users")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      const newUser = JSON.parse(data);
      console.log(newUser);
      users.push(newUser);
      res.send(users);
    });
  })
  .delete((req, res) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      const deleteUser = JSON.parse(data);
      console.log(newUser);
      users.push(newUser);
      res.send(users);
    });
  });

app.listen(port, () => {
  console.log("Server started listening on port: 3000");
});
