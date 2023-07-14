async function addUser(req, user) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let paint = await client
      .db("PawsUpAuction")
      .collection("Auction")
      .findOne({ paint: 1 });
    paint.users.push(user);
    await client
      .db("PawsUpAuction")
      .collection("Auction")
      .replaceOne({ paint: user.id }, paint);
  } catch (err) {
    console.log(err);
  }
}

async function getUsers(req, paintNumber) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let paint = await client
      .db("PawsUpAuction")
      .collection("Auction")
      .findOne({ paint: +paintNumber });
    return paint.users;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { addUser, getUsers };
