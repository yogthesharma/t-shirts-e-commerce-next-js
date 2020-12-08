const nc = require(`next-connect`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const cookie = require(`cookie`);

import User from "../../../../models/User";
import initDB from "../../../../lib/initDB";

// init database
initDB();

const handler = nc().post(async (req, res, next) => {
  const { name, email, phoneNumber, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = User({
    name,
    email,
    phoneNumber,
    hash,
  });

  user
    .save()
    .then(async (user) => {
      const token = await jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: user._id,
        },
        "secret"
      );

      res
        .setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, "user", user, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: true,
          })
        )
        .json({ user });
    })
    .catch((err) => res.json({ err }));
});

export default handler;
