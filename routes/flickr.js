const router = require("express").Router();
const request = require("request");
const qs = require("query-string");

const baseURL = {
  method: "flickr.photos.getRecent",
  api_key: "7b433214a9ed99bd667c6dcba46c960a",
  format: "json",
  nojsoncallback: "1",
  perpage: "10",
};

const url = "https://www.flickr.com/services/rest/?";

/* SETUP REQUEST HTTP*/
router.get("/", function (req, res, next) {
  const { tags } = req.query;
  const reqURL = url + qs.stringify({ ...baseURL, tags });
  console.log(reqURL);
  request({ url: reqURL, json: true }, function (request, response) {
    return res.json(response.body);
  });
});

module.exports = router;
