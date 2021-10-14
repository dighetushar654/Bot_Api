const { Telegraf } = require("telegraf");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require('morgan');
const cors = require("cors");
// App Config...
const app = express();                  // instanciating express() in app variable
dotenv.config();                        // to use .env variables
const Port = process.env.Port || 4000;

// Middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(cors());

const bot = new Telegraf("2015554624:AAFzmALvIYWw2tSNX0JHPKBbDmNHhSXVM-Y");

// bot.use((ctx) => {
//     ctx.reply("hii human");
// })

bot.start((ctx) => {
    ctx.reply("The Bot Has Started!!")
})

bot.help((ctx) => {
    ctx.reply("This Bot Perform Following Commands\n - /start\n - /help");
})

bot.on('sticker', (ctx) => ctx.reply("Cool Sticker!!"));

bot.hears("Hello", (ctx) => {
    ctx.reply("Hello Sir, How Are You?")
})

bot.command('say', (ctx) => {
    ctx.reply("Say Something !!!");
})

bot.launch()

// DB Config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then ( () => console.log("MongoDB Connected"))
.catch ( (err) => console.log(err)); 


//Default Route
app.get("/", (req, res) => {
    res.status(200).json("Hello From Covid_API Server");
});

//Port for listening
app.listen(Port, () => {
    console.log(`Server Running On Port ${Port}`);
})