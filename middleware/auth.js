import nc from "next-connect";
import cookieParser from "cookie-parser";

//
const authHandler = nc()
  .use(cookieParser())
  .use(async (req, res, next) => {
    console.log("Done", req);
    console.log(req.body);

    next();
  });

export default authHandler;
