async function addUser(req, user) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let paint = await client
      .db("PawsUpAuction")
      .collection("Auction")
      .findOne({ paint: user.paint });
    paint.users.push(user);
    await client
      .db("PawsUpAuction")
      .collection("Auction")
      .replaceOne({ paint: user.paint }, paint);
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

async function getAll(req) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let data = await client
      .db("PawsUpAuction")
      .collection("Auction")
      .find({})
      .toArray();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function getCount(req) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let counter = await client
      .db("PawsUpAuction")
      .collection("Counter")
      .findOne({ party: "karaoke" });
    return counter.count;
  } catch (err) {
    console.log(err);
  }
}

async function plusCount(req) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let counter = await client
      .db("PawsUpAuction")
      .collection("Counter")
      .findOne({ party: "karaoke" });
    counter.count = counter.count + 1;
    await client
      .db("PawsUpAuction")
      .collection("Counter")
      .replaceOne({ party: "karaoke" }, counter);
  } catch (err) {
    console.log(err);
  }
}

async function minusCount(req) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let counter = await client
      .db("PawsUpAuction")
      .collection("Counter")
      .findOne({ party: "karaoke" });
    counter.count = counter.count - 1;
    await client
      .db("PawsUpAuction")
      .collection("Counter")
      .replaceOne({ party: "karaoke" }, counter);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { addUser, getUsers, getAll, getCount, plusCount, minusCount };
