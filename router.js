const httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

const routes = {
  "GET": {},
  "POST": {}
};

exports.handle = (req, res) => {
  // console.log ("handling "+req.url);
  // console.log ("routes: "+ JSON.stringify(routes));
  // console.log (Object.keys(routes["GET"]));
  try { routes[req.method][req.url](req,res);
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    res.end("caught exception: "+ e.message);
  }
};

routes["GET"]["/debug"] = (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  res.write("GET routes: ");
  res.write(JSON.stringify(Object.keys(routes["GET"])));
  res.write("POST routes: ");
  res.write(JSON.stringify(Object.keys(routes["POST"])));
  res.end("- done -");
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};
