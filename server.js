const { Telegraf } = require("telegraf");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require('morgan');
const cors = require("cors");
const covidRoute = require("./routes/covid");
// App Config...
const app = express();                  // instanciating express() in app variable
dotenv.config();                        // to use .env variables
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(cors());

app.use("/covid_api" , covidRoute);

// Telegraf Config
const bot = new Telegraf("2015554624:AAFzmALvIYWw2tSNX0JHPKBbDmNHhSXVM-Y");

// bot.use((ctx) => {
//     ctx.reply("hii human");
// })

bot.start((ctx) => {
    let name = ctx.from.first_name
    ctx.reply(`Hi, ${name} Where are you from?`)
})

bot.command('restart', (ctx) => {
    let name = ctx.from.first_name
    ctx.reply(`Hi, ${name} Where are you from?`)}
)

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

bot.on('text', (ctx) => {
    ctx.reply(`How many vaccines are you taken?`,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'one', callback_data: 'one' },
                ],
                [
                    { text: 'two', callback_data: 'two' },
                ]
            ]
        }
    })
})

bot.action('one', ctx => {
    console.log(ctx.from)
    let response = `Do you have any symptons?`;
    ctx.deleteMessage();
    ctx.reply(response, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Yes", callback_data: 'yes' },
                ],
                [
                    { text: "No", callback_data: 'no' },
                ],
            ]
        }
    })
})

bot.action('yes', ctx => {
    console.log(ctx.from)
    let response = `Do you have any symptons?`;
    ctx.deleteMessage();
    ctx.reply(response, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "cough", callback_data: 'cough' },
                ],
                [
                    { text: "fever", callback_data: 'fever' },
                ],
            ]
        }
    })
})

bot.action('fever', ctx => {
    let response = `Take a cosfils if cough increases contact to doctor`;
    ctx.deleteMessage();
    ctx.reply(response)
})

bot.action('cough', ctx => {
    let response = `Take a cosfils if cough increases contact to doctor`;
    ctx.deleteMessage();
    ctx.reply(response)
})

bot.action('two', ctx => {
    let response = `Congrats you are full vaccinated! but fight is not over yet `;
    ctx.deleteMessage();
    ctx.reply(response)
})

bot.launch();


//Default Route
app.get("/", (req, res) => {
    res.status(200).json("Hello From Covid_API Server");
});

//PORT for listening
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})