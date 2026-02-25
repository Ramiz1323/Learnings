const followModel = require("../models/follow.model");

async function followUserController(req, res) {
  const loggedInUserName = req.user.name;
  const followeeName = req.params.username;

  //Checkings...
  if (loggedInUserName === followeeName) {
    return res.status(400).json({ message: "You can't follow yourself" });
  }

  //Pending
  const pending = await followModel.findOne({ follower: loggedInUserName , status: "pending" });
  if (pending) {
    return res
      .status(400)
      .json({ message: "You have already sent a follow request" });
  }

  //Accepted
  const accepted = await followModel.findOne({ followee: followeeName, status: "accepted" });
  if (accepted) {
    return res
      .status(400)
      .json({ message: "You are already following this user" });
  }

  //Rejected
  const rejected = await followModel.findOne({ followee: followeeName, status: "rejected" });
  if (rejected) {
    return res
      .status(400)
      .json({ message: "Your follow request was rejected" });
  }

  //Creating follow record in the database
  await followModel.create({
    follower: loggedInUserName,
    followee: followeeName,
    status: "pending",
  });
  res
    .status(200)
    .json({ message: `You have sent a follow request to ${followeeName}` });
  }

async function unfollowUserController(req, res) {
  const loggedInUserName = req.user.name;
  const followeeName = req.params.username;
  
  //Checkings...
  if (loggedInUserName === followeeName) {
    return res.status(400).json({ message: "You can't unfollow yourself" });
  }
  const followeeExist = await followModel.findOne({ follower: loggedInUserName, followee: followeeName });
  if (!followeeExist) {
    return res
      .status(400)
      .json({ message: "You are not following this user" });
  }

  //Finding the followee in the database
  const followeeRecord = await followModel.findOne({ followee: followeeName });
  if (!followeeRecord) {
    return res
      .status(404)
      .json({ message: "The user you are trying to unfollow does not exist" });
  }
  await followModel.deleteOne({ follower: loggedInUserName, followee: followeeName });
  res.status(200).json({ message: `You have unfollowed ${followeeName}` });
}

async function followStatusController(req, res) {
  const loggedInUserName = req.user.name;
  const followerName = req.params.followername;
  const status = req.body.status;
  const followRecord = await followModel.findOne({ follower: followerName, followee: loggedInUserName });

  //Finding the request in the database
  if (!followRecord) {
    return res.status(404).json({ message: "Follow request not found" });
  }

  //Status must be either accepted or rejected
  if (status !== "accepted" && status !== "rejected") {
    return res.status(400).json({ message: "Status must be either accepted or rejected" });
  }

  //Only the followee can accept or reject the request
  if (followRecord.followee !== loggedInUserName) {
    return res.status(403).json({ message: "You are not authorized to perform this action" });
  }

  //If the request is rejected, then it should be deleted from the database
  if (status === "rejected") {
    await followModel.deleteOne({ follower: followerName, followee: loggedInUserName });
    return res.status(200).json({ message: `You have rejected the follow request from ${followerName}` });
  }

  //If the request is already accepted or rejected, it cannot be updated
  if (followRecord.status === "accepted") {
    return res.status(400).json({ message: `You have already ${followRecord.status} this follow request` });
  }

  //Status update to the database
  followRecord.status = status;
  await followRecord.save();
  res.status(200).json({ message: `You have ${status} the follow request from ${followerName}` });
}

module.exports = {
  followUserController,
  unfollowUserController,
  followStatusController
};
