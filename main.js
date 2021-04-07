const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});

router.get("/student.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/student.html", res);
});

router.get("/about.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/about.html", res);
});

router.get("/bootstrap.css", (req, res) =>{
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("node_modules/bootstrap/dist/css/bootstrap.min.css", res);

});

const images = ["imi-b-basisjahr.png", "imi-b-vertiefungsjahr.png", "imi-b-spezialisierungsjahr.png"];
const count = images.length;
for (var i = 0; i < count; i++) {
  router.get("/"+images[i], (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/"+req.url, res);
  });
}

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
