const express = require("express");
const path = require("path");
const { connectToMongodb } = require("./connect");
const cookieparser = require("cookie-parser");
const staticRoute = require("./routes/staticRouter");

const { restictTOLoggedUserOnly } = require("./middlewares/auth");

const userRoute = require("./routes/user");
const app = express();
const PORT = 3009;

connectToMongodb("mongodb://127.0.0.1:27017/userAuthDb")
  .then(() => {
    console.log("Monogodb connected successfully");
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.use("/", staticRoute);
app.use("/user", userRoute);
// app.use("/user", restictTOLoggedUserOnly, urlRoute);

app.use(cookieparser);

app.listen(PORT, () => {
  console.log(`Your port is running on port ${PORT}`);
});
