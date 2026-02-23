const followModel = require("../models/follow.model");

async function followUserController(req, res) {
  const loggedInUserName = req.user.name;
  const followeeName = req.params.username;
  if (loggedInUserName === followeeName) {
    return res.status(400).json({ message: "You can't follow yourself" });
  }

  const followRecord = await followModel.create({
    follower: loggedInUserName,
    followee: followeeName,
  });
  res
    .status(200)
    .json({ message: `You are now following ${followeeName}`, followRecord });
}

module.exports = {
  followUserController,
};
