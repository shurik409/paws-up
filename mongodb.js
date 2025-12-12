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

async function addGiveawayUser(req, user) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const { phone, name } = user;
    const client = req.app.locals.db;

    const existing = await client
      .db("PawsUpAuction")
      .collection("giveaway")
      .findOne({
        $or: [{ phone }, { name }],
      });

    if (existing) {
      return {
        error: "Пользователь с таким телефоном или ником уже существует",
      };
    }

    const number = await getNextUserNumber(req);
    if (!number) {
      return {
        error: "Something wrong",
      };
    }
    const userInfo = {
      phone,
      name,
      number,
    };
    await client.db("PawsUpAuction").collection("giveaway").insertOne(userInfo);

    return { number };
  } catch (err) {
    console.log(err);
  }
}

async function getNextUserNumber(req) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let result = await client
      .db("PawsUpAuction")
      .collection("counters")
      .findOneAndUpdate(
        { _id: "user_seq" },
        { $inc: { seq: 1 } },
        {
          upsert: true,
          returnDocument: "after", // важно!
        }
      );
    return result.seq;
  } catch (err) {
    console.log(err);
  }
}

async function getGiveawayUsers(req) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = req.app.locals.db;
    let users = await client
      .db("PawsUpAuction")
      .collection("giveaway")
      .find()
      .toArray();
    return users;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addUser,
  getUsers,
  getAll,
  getCount,
  plusCount,
  minusCount,
  addGiveawayUser,
  getGiveawayUsers,
};
