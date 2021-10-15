const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./api/routes/invoice.routes")(app);

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
