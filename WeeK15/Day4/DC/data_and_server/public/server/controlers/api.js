const getInput = (req, res) => {
    res.json({ welcome: "Hello From Express!" });
};
  
const postInput = (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(
      `I receive your post request. you send me: "${req.body}"`
    );
    console.log(` input send: ${req.body}`);
};
  
module.exports = {
    getInput,
    postInput,
};