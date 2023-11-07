import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
res.send("<h1>Hello world!</h>");
});
app.get("/about", (req,res) => {
  res.send("<h1> About Me</h>");
  });
app.get("/contact", (req,res) => {
res.send("<h1>Contact</h>");
});
app.get("/profile", (req,res) => {
  res.send("<p>Its me rock.My lumuna Spark is Blue Green!</p>");
  });
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
})