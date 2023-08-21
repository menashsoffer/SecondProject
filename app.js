const express = require("express");
const app = express();
const { routes } = require("./routers/routersToProducts.js");

app.use(express.json());
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is up and running on port:${port}`);
});
