const nc = require(`next-connect`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
// import { parseCookies, setCookie, destroyCookie } from "nookies";
import User from "../../../../models/User";
import initDB from "../../../../lib/initDB";
const cookie = require(`cookie`);

// init database
initDB();

const handler = nc().post(async (req, res, next) => {
  const { email, password } = req.body;

  await User.findOne({ email })
    .then(async (user) => {
      if (user == null) res.json({ msg: "No User Found", errFlag: true });
      const checkPass = await bcrypt.compare(password, user.hash);
      if (!checkPass) res.json({ msg: "Password Do Not Match", errFlag: true });
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
          cookie.serialize("token", token, {
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
