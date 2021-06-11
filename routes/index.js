const router = require("express").Router();
const flickr = require("./flickr");

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "this is main index routes",
  });
});

router.use("/flickr", flickr);

module.export = router;
