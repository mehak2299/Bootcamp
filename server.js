const express = require('express');
const dotenv = require('dotenv')
const bootcamps = require('./routes/bootcamps');
const morgan=require('morgan')
const colors=require('colors')
const connectDB=require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' });
connectDB();
const app = express();
const logger = require("./middleware/logger");
if(process.env.NODE_ENV==='development')
{
    app.use(morgan('dev'));
}
//Body parser
app.use(express.json());

//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 6000;
const server=app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


//Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error ${err.message}`.red)
    server.close(()=>{
        process.exit(1);
    })
})
process.on('uncaughtException',(err)=>{
    console.error(`UncaughtExpetion ${err}`.magenta.bold)
    process.exit(1)
})
process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log("Server colsed SIGERM")
        process.exit(1);
    })
})
process.on('SIGINT',()=>{
    server.close(()=>{
        console.log("Server colsed SIGINt")
        process.exit(1);
    })
})
