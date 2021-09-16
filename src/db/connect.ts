import mongoose from "mongoose";
import config from "config";

import log from "../logger";

function connect() {
  const dbUri = config.get("dbUri") as string;
  return mongoose.connect(dbUri)
  .then(() => {
      log.info("Connected to Mongo")
  })
  .catch((err) => {
      log.error("Failed to connect to Mongo")
      log.error(err)
      process.exit(1)
  })
}

export default connect;
