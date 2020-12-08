import nc from "next-connect";
import initDB from "../../../../lib/initDB";
import Product from "../../../../models/Product";
import authHandler from "../../../../middleware/auth";

// initializing database
initDB();

const handler = nc()
  .use(authHandler)
  .get(async (req, res, next) => {
    console.log(req.cookies, "Cookies at Data Api route.");

    await Product.find({}, (err, data) => {
      res.json({ data });
    });
    console.log(req.cookies);
  })

  // main product page
  .post(async (req, res, next) => {
    const { id } = req.body;
    await Product.findById(id, (err, data) => {
      if (err) res.json({ err });
      res.json({ data });
    });
  });

export default handler;
