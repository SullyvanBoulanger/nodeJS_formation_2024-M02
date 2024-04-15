const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.CONNECTIONSTRING, {
    dbName: process.env.MONGO_DB_COLLECTION_NAME,
  });
}

main().catch((err) => console.log(err));
