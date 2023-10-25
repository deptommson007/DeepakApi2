require("dotenv").config();
const connectDB = require("./db/connect");

const Business = require("./models/business");


const BussinessJson = require("./bussiness.json")

const start = async () => {
    try {
await connectDB(process.env.MONGODB_URL);
await Business.deleteMany();
await Business.create(BussinessJson);

console.log("success");
    } catch (error){
        console.log(error);
    }
};

start();
