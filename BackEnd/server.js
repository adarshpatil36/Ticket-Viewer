const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3001;

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const api = axios.create({
  baseURL: "https://zendeskcodingchallenge9546.zendesk.com/api/v2",
  responseType: "json",
  responseEncoding: "utf8",
});

// simple route
app.get("/", (req, res) => {
  api
    .get("/requests.json", {
      auth: {
        username: "akpatil36@gmail.com",
        password: "Sjsu@123",
      },
    })
    .then((response) => {
      console.log("Ticket Data recieved", response.data.requests.length);
      res.send(JSON.stringify(response.data.requests));
    })
    .catch(function (error) {
      console.log("Error ", error.response.data.error);
      res.send(JSON.stringify(error.response.status));
    });
});

// Error handler
app.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message,
    },
  });
});

// set port, listen for requests
app.listen(port, (error) => {
  if (error) {
    console.log("Error starting the server: ", error);
  } else {
    console.log(`Server is running on port ${port}.`);
  }
});
