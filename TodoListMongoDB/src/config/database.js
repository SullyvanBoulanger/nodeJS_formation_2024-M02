// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./db.sqlite",
// });

// async function init() {
//   try {
//     await sequelize.sync();
//   } catch (error) {
//     console.error("Error creating table:", error);
//   }
// }

// init();

// module.exports = sequelize;

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.CONNECTIONSTRING}`);
}

main().catch((err) => console.log(err));
